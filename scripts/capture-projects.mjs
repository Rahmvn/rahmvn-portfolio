import { chromium } from '@playwright/test'
import { mkdir, writeFile } from 'node:fs/promises'

// Public, unauthenticated pages only; originals stay outside runtime assets until reviewed.
const browser = await chromium.launch({ channel: 'msedge', headless: true })
const records = []
try {
  await mkdir('.local/project-captures', { recursive: true })
  const targets = [['promotionsure', 'https://promotionsure.com.ng/'], ['al-muflihoon', 'https://almuflihoon.com.ng/'], ['pillars-of-pension', 'https://pillars-of-pension-website.vercel.app/'], ['al-muflihoon-admissions', 'https://almuflihoon.com.ng/admissions'], ['pillars-of-pension-author', 'https://pillars-of-pension-website.vercel.app/author.html']]
  const detailsOnly = process.argv.includes('--details')
  for (const [slug, url] of targets.filter(([slug]) => !detailsOnly || slug.endsWith('-admissions') || slug.endsWith('-author'))) {
    for (const width of [1440, 390]) {
      const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 960 }, reducedMotion: 'reduce', colorScheme: 'light' })
      try {
        const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 })
        await page.evaluate(() => document.fonts.ready)
        const path = `.local/project-captures/${slug}-${width}.png`
        await page.screenshot({ path, animations: 'disabled' })
        records.push({ slug, width, url: page.url(), status: response?.status(), title: await page.title(), path, capturedAt: new Date().toISOString() })
      } catch (error) { records.push({ slug, width, error: String(error) }) }
      finally { await page.close() }
    }
  }
  await writeFile(`.local/project-captures/${detailsOnly ? 'details-provenance' : 'provenance'}.json`, JSON.stringify(records, null, 2))
  console.log(JSON.stringify(records, null, 2))
} finally { await browser.close() }
