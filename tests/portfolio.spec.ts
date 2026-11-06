import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = ['/', '/projects/promotionsure', '/projects/alabarin', '/projects/al-muflihoon', '/projects/pillars-of-pension', '/resume']

test('desktop links distinguish sections, case studies and resume', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Main navigation' })
  await nav.getByRole('link', { name: 'Projects', exact: true }).click()
  await expect(page).toHaveURL(/\/#projects$/)
  await expect(nav.getByRole('link', { name: 'Projects', exact: true })).toHaveAttribute('aria-current', 'location')
  await page.locator('.project-card').filter({ hasText: 'PromotionSure' }).click()
  await expect(page).toHaveURL(/\/projects\/promotionsure$/)
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://rahmvn-portfolio.vercel.app/projects/promotionsure')
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', 'https://rahmvn-portfolio.vercel.app/projects/promotionsure')
  await expect(nav.locator('[aria-current]')).toHaveCount(0)
  await page.getByRole('link', { name: 'Next: Alabarin →' }).click()
  await expect(nav.locator('[aria-current]')).toHaveCount(0)
  await page.getByRole('link', { name: '← Back to projects' }).click()
  await expect(page.locator('#projects')).toBeFocused()
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://rahmvn-portfolio.vercel.app/')
  await expect(nav.getByRole('link', { name: 'Projects', exact: true })).toHaveAttribute('aria-current', 'location')
  await nav.getByRole('link', { name: 'Contact', exact: true }).click()
  await expect(nav.getByRole('link', { name: 'Contact', exact: true })).toHaveAttribute('aria-current', 'location')
  // Calling the control in place avoids Playwright scrolling the off-screen header into view.
  const scrollBeforeTheme = await page.evaluate(() => scrollY)
  await page.getByRole('button', { name: 'Soft dark mode' }).evaluate(button => (button as HTMLButtonElement).click())
  expect(await page.evaluate(() => scrollY)).toBe(scrollBeforeTheme)
  await expect(nav.getByRole('link', { name: 'Contact', exact: true })).toHaveAttribute('aria-current', 'location')
  await expect(page).toHaveURL(/\/#contact$/)
  await nav.getByRole('link', { name: 'Résumé', exact: true }).click()
  await expect(nav.getByRole('link', { name: 'Résumé', exact: true })).toHaveAttribute('aria-current', 'page')
  await expect(nav.getByRole('link', { name: 'Projects', exact: true })).not.toHaveAttribute('aria-current')
})

test('mobile tabs follow section clicks, manual scrolling and cross-route returns', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Mobile navigation' })
  await expect(nav).toBeVisible()
  for (const label of ['Projects', 'About', 'Contact', 'Home']) {
    const link = nav.getByRole('link', { name: label, exact: true })
    await link.click()
    await expect(link).toHaveAttribute('aria-current', 'location')
    await expect(page.locator(`#${label.toLowerCase()}`)).toBeFocused()
  }
  await page.evaluate(() => window.scrollTo(0, document.getElementById('projects')!.offsetTop + 200))
  await expect(nav.getByRole('link', { name: 'Projects', exact: true })).toHaveAttribute('aria-current', 'location')
  await page.locator('.project-card').filter({ hasText: 'Pillars of Pension' }).click()
  await expect(nav.locator('[aria-current]')).toHaveCount(0)
  await nav.getByRole('link', { name: 'About', exact: true }).click()
  await expect(page).toHaveURL(/\/#about$/)
  await expect(nav.getByRole('link', { name: 'About', exact: true })).toHaveAttribute('aria-current', 'location')
  const box = await nav.boundingBox()
  expect(box!.y + box!.height).toBeLessThanOrEqual(844)
  await page.goto('/resume')
  await expect(nav.locator('[aria-current]')).toHaveCount(0)
  await expect(page.locator('.mobile-resume')).toHaveAttribute('aria-current', 'page')
})

test('direct hashes, history and repeated section links preserve destination', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#projects')
  const nav = page.getByRole('navigation', { name: 'Main navigation' })
  await expect(nav.getByRole('link', { name: 'Projects', exact: true })).toHaveAttribute('aria-current', 'location')
  await page.locator('.project-card').filter({ hasText: 'Alabarin' }).click()
  await page.goBack()
  await expect(page).toHaveURL(/\/#projects$/)
  await expect(nav.getByRole('link', { name: 'Projects', exact: true })).toHaveAttribute('aria-current', 'location')
  await nav.getByRole('link', { name: 'Projects', exact: true }).click()
  await expect(page.locator('#projects')).toBeFocused()
})

test('external destinations and local assets are valid and no placeholder links exist', async ({ page }) => {
  for (const route of routes) {
    await page.goto(route)
    expect(await page.locator('a').evaluateAll(links => links.filter(link => !link.getAttribute('href') || link.getAttribute('href') === '#' || link.getAttribute('href')?.startsWith('javascript:')).length)).toBe(0)
    await page.evaluate(async () => { await Promise.all(Array.from(document.images).map(image => { image.loading = 'eager'; return image.decode() })) })
    const brokenImages = await page.evaluate(() => Array.from(document.images).filter(image => !image.complete || image.naturalWidth === 0).map(image => image.getAttribute('src')))
    expect(brokenImages).toEqual([])
    for (const link of await page.locator('a[target="_blank"]').all()) await expect(link).toHaveAttribute('rel', /noopener/)
  }
})

test('mobile keyboard destinations, repeated clamped links and normal motion work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Mobile navigation' })
  const about = nav.getByRole('link', { name: 'About', exact: true })
  await about.focus()
  await page.keyboard.press('Enter')
  await expect(about).toHaveAttribute('aria-current', 'location')
  await expect(page.locator('#about')).toBeFocused()
  // A layout reflow can move the bottom after the smooth-scroll target was calculated.
  await page.setViewportSize({ width: 375, height: 844 })
  await expect(about).toHaveAttribute('aria-current', 'location')
  await page.setViewportSize({ width: 390, height: 844 })
  await page.mouse.wheel(0, 800)
  await expect(nav.getByRole('link', { name: 'Contact', exact: true })).toHaveAttribute('aria-current', 'location')
  await about.click()
  await expect(about).toHaveAttribute('aria-current', 'location')
  await expect(page.locator('main')).toHaveCSS('animation-duration', '0.32s')
})

test('history restores a manually scrolled case-study position', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/projects/pillars-of-pension')
  await page.evaluate(() => document.fonts.ready)
  await page.evaluate(() => window.scrollTo(0, 1000))
  const before = await page.evaluate(() => scrollY)
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'About', exact: true }).click()
  await expect(page).toHaveURL(/\/#about$/)
  await page.goBack()
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(before)
})

for (const width of [390, 1200]) for (const theme of ['light', 'dark'] as const) {
  test(`accessibility scan — ${width}px ${theme}`, async ({ page }) => {
    test.setTimeout(120000)
    await page.setViewportSize({ width, height: 844 })
    await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: theme })
    for (const route of routes) {
      await page.goto(route)
      await page.evaluate(() => document.fonts.ready)
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
      expect(results.violations.map(issue => ({ id: issue.id, impact: issue.impact, elements: issue.nodes.map(node => node.target) })), route).toEqual([])
    }
  })
}

test('resume print view is light, complete, and hides the site controls', async ({ page }) => {
  await page.addInitScript(() => { window.print = () => { document.body.dataset.printRequested = 'true' } })
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/resume')
  await page.getByRole('button', { name: 'Print', exact: true }).click()
  await expect(page.locator('body')).toHaveAttribute('data-print-requested', 'true')
  await expect(page.getByRole('link', { name: 'Portfolio', exact: true })).toHaveAttribute('href', 'https://rahmvn-portfolio.vercel.app/')
  await page.emulateMedia({ media: 'print' })
  await expect(page.locator('.site-header')).toBeHidden()
  await expect(page.locator('.mobile-navigation')).toBeHidden()
  await expect(page.locator('.resume-actions')).toBeHidden()
  await expect(page.locator('.site-footer')).toBeHidden()
  await expect(page.locator('html')).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(page.locator('.resume-entry')).toHaveCount(4)
  await expect(page.locator('.resume-page')).toContainText('₦400,000+')
  await expect(page.locator('.print-link-label').first()).toBeVisible()
  await expect(page.locator('.resume-contact')).toContainText('rahmvn-portfolio.vercel.app')
})
