import { chromium } from '@playwright/test'
import { preview } from 'vite'
import { mkdir, writeFile } from 'node:fs/promises'

const server = await preview({ preview: { host: '127.0.0.1', port: 4320, strictPort: true } })
const browser = await chromium.launch({ channel: 'msedge', headless: true })
const routes = [['home', '/'], ['promotionsure', '/projects/promotionsure'], ['alabarin', '/projects/alabarin'], ['school', '/projects/al-muflihoon'], ['pension', '/projects/pillars-of-pension'], ['resume', '/resume']]
const rows = []
try {
  await mkdir('.local/qa', { recursive: true })
  for (const width of [390, 1200]) for (const theme of ['light', 'dark']) {
    const context = await browser.newContext({ viewport: { width, height: 844 }, colorScheme: theme, reducedMotion: 'reduce' })
    const page = await context.newPage()
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })
    for (const [name, path] of routes) {
      await page.goto(`http://127.0.0.1:4320${path}`, { waitUntil: 'networkidle' })
      await page.evaluate(() => document.fonts.ready)
      // Full-page captures must include lazy images below the initial viewport.
      await page.evaluate(async () => {
        await Promise.all(Array.from(document.images).map(image => { image.loading = 'eager'; return image.decode() }))
      })
      const base = `.local/qa/${name}-${width === 390 ? 'mobile' : 'desktop'}-${theme}`
      await page.screenshot({ path: `${base}-viewport.png`, animations: 'disabled' })
      // Figma's full mobile artboards exclude the pinned viewport overlay.
      if (width === 390) await page.locator('.mobile-navigation').evaluate(node => { node.style.visibility = 'hidden' })
      await page.screenshot({ path: `${base}.png`, fullPage: true, animations: 'disabled' })
      if (width === 390) await page.locator('.mobile-navigation').evaluate(node => { node.style.visibility = '' })
      rows.push({ name, path, width, theme, errors: [...errors], ...await page.evaluate(() => ({ height: document.documentElement.scrollHeight, overflow: document.documentElement.scrollWidth > innerWidth, landmarks: [...document.querySelectorAll('main > *, .site-header, .site-footer')].map(node => ({ tag: node.tagName, className: node.className, top: node.getBoundingClientRect().top + scrollY, height: node.getBoundingClientRect().height })), images: [...document.images].filter(img => getComputedStyle(img).display !== 'none').map(img => ({ source: img.getAttribute('src')?.startsWith('data:') ? 'bundled-svg' : img.getAttribute('src'), naturalWidth: img.naturalWidth, width: img.getBoundingClientRect().width, height: img.getBoundingClientRect().height })) })) })
    }
    await context.close()
  }
  await writeFile('.local/qa/visual-results.json', JSON.stringify(rows, null, 2))
  console.log(`Captured ${rows.length} full-page comparisons plus viewport images. Overflow: ${rows.filter(row => row.overflow).length}; errors: ${rows.reduce((sum, row) => sum + row.errors.length, 0)}.`)
} finally { await browser.close(); await new Promise(done => server.httpServer.close(done)) }
