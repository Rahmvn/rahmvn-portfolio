import { chromium } from '@playwright/test'
import { preview } from 'vite'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createHash } from 'node:crypto'

// Generate from the built website and its own print stylesheet. Never copy a reference PDF.
const server = await preview({ preview: { host: '127.0.0.1', port: 4319, strictPort: true, open: false } })
let browser
try {
  browser = await chromium.launch({ channel: 'msedge', headless: true })
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 }, reducedMotion: 'reduce' })
  await page.goto('http://127.0.0.1:4319/resume', { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  const portfolioHref = await page.getByRole('link', { name: 'Portfolio', exact: true }).getAttribute('href')
  if (!portfolioHref?.startsWith('https://')) throw new Error('Portfolio contact link is missing')
  await page.emulateMedia({ media: 'print', colorScheme: 'light' })
  if (await page.locator('.resume-entry').count() !== 4) throw new Error('Incomplete résumé content')
  const pdf = await page.pdf({ format: 'A4', preferCSSPageSize: true, printBackground: true, tagged: true, outline: true })
  const raw = pdf.toString('latin1')
  const pageCount = (raw.match(/\/Type\s*\/Page\b/g) ?? []).length
  if (!raw.startsWith('%PDF-') || pageCount !== 1) throw new Error(`Expected one-page PDF; received ${pageCount} pages`)
  if (!/\/URI\s*\(/.test(raw)) throw new Error('PDF links are missing')
  if (!raw.includes(`/URI (${portfolioHref})`)) throw new Error('Portfolio link is missing from the PDF')
  for (const directory of ['public/downloads', 'dist/downloads']) {
    await mkdir(directory, { recursive: true })
    await writeFile(resolve(directory, 'Abdulrahman_Saheed_CV.pdf'), pdf)
  }
  await mkdir('.local/pdf', { recursive: true })
  await page.screenshot({ path: '.local/pdf/resume-print-browser.png', fullPage: true, animations: 'disabled' })
  const sources = await Promise.all(['src/content/resume.ts', 'src/content/site.ts', 'src/pages/ResumePage.tsx', 'src/styles/print.css', 'src/styles/global.css'].map(path => readFile(path)))
  const record = { generatedAt: new Date().toISOString(), pages: pageCount, size: pdf.length, sha256: createHash('sha256').update(pdf).digest('hex'), sourceSha256: createHash('sha256').update(Buffer.concat(sources)).digest('hex') }
  await writeFile('.local/pdf/generation.json', JSON.stringify(record, null, 2))
  console.log(`Generated and checked ${pageCount} A4 page (${pdf.length} bytes). Download is ready in public/ and dist/.`)
} finally {
  await browser?.close()
  await new Promise((done, reject) => server.httpServer.close(error => error ? reject(error) : done()))
}
