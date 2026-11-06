import { expect, test } from '@playwright/test'

const paths = ['/', '/projects/promotionsure', '/projects/alabarin', '/projects/al-muflihoon', '/projects/pillars-of-pension', '/resume']

test('direct routes, titles and locally loaded Geist have no runtime errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  for (const path of paths) {
    await page.goto(path)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.locator('[aria-current]:visible')).toHaveCount(path.startsWith('/projects/') ? 0 : 1)
    await expect(page).toHaveTitle(/Abdulrahman Saheed/)
  }
  await page.evaluate(() => document.fonts.ready)
  expect(await page.evaluate(() => document.fonts.check('400 16px "Geist Variable"'))).toBe(true)
  const fontOrigins = await page.evaluate(() => performance.getEntriesByType('resource').filter(entry => /\.woff2/.test(entry.name)).map(entry => new URL(entry.name).origin))
  expect(fontOrigins.length).toBeGreaterThan(0)
  expect(fontOrigins.every(origin => origin === 'http://127.0.0.1:4317')).toBe(true)
  expect(errors).toEqual([])
})

test('theme survives routes, reload and history while route focus stays accurate', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.getByRole('button', { name: 'Soft dark mode' }).click()
  await expect(page.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('html')).toHaveCSS('background-color', 'rgb(20, 25, 23)')
  await page.locator('.project-card').filter({ hasText: 'Alabarin' }).click()
  await expect(page.locator('main')).toBeFocused()
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.getByRole('link', { name: 'Résumé', exact: true }).click()
  await page.goBack()
  await expect(page).toHaveURL(/\/projects\/alabarin$/)
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(page.locator('[aria-current]:visible')).toHaveCount(0)
})

test('system theme, invalid storage and changes from another tab work', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('portfolio-theme', 'invalid'))
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.emulateMedia({ colorScheme: 'light' })
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  const otherTab = await page.context().newPage()
  await otherTab.goto('/')
  await otherTab.evaluate(() => localStorage.setItem('portfolio-theme', 'dark'))
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await otherTab.evaluate(() => localStorage.removeItem('portfolio-theme'))
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})

test('storage restrictions keep theme switching usable across routes', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new DOMException('Unavailable', 'SecurityError') }
    Storage.prototype.setItem = () => { throw new DOMException('Unavailable', 'SecurityError') }
  })
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/')
  await page.getByRole('button').click()
  await page.getByRole('link', { name: 'Résumé', exact: true }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
})

test('keyboard skip link, theme state and reduced motion work', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'light' })
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  await page.getByRole('button').focus()
  await page.keyboard.press('Space')
  await expect(page.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByRole('button')).toHaveCSS('transition-duration', '0s')
  await expect(page.getByRole('button')).toHaveCSS('outline-style', 'solid')
  expect(await page.evaluate(() => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--motion-entrance')))).toBe(0)
})

test('all routes wrap at mobile, navigation breakpoints, tablet and desktop widths in both themes', async ({ page }, testInfo) => {
  test.setTimeout(120000)
  for (const width of [320, 375, 390, 768, 849, 850, 1024, 1200, 1440]) {
    await page.setViewportSize({ width, height: 844 })
    for (const colorScheme of ['light', 'dark'] as const) {
      await page.emulateMedia({ colorScheme })
      for (const path of paths) {
        await page.goto(path)
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${path} ${width}px ${colorScheme}`).toBe(true)
      }
    }
  }
  await page.goto('/')
  await page.setViewportSize({ width: 1200, height: 844 })
  await page.screenshot({ path: testInfo.outputPath('home-desktop-dark.png'), fullPage: true, animations: 'disabled' })
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ colorScheme: 'light' })
  await page.screenshot({ path: testInfo.outputPath('home-mobile-light.png'), fullPage: true, animations: 'disabled' })
})

test('unknown routes select no link and resume exposes the generated PDF', async ({ page }) => {
  await page.goto('/projects/unknown')
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
  await expect(page.locator('[aria-current]')).toHaveCount(0)
  await page.getByRole('link', { name: 'Résumé', exact: true }).click()
  const download = page.getByRole('link', { name: 'Download PDF' })
  await expect(download).toHaveAttribute('download', 'Abdulrahman_Saheed_CV.pdf')
  const response = await page.request.get((await download.getAttribute('href'))!)
  expect(response.ok()).toBe(true)
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-')
  const [saved] = await Promise.all([page.waitForEvent('download'), download.click()])
  expect(saved.suggestedFilename()).toBe('Abdulrahman_Saheed_CV.pdf')
  expect(await saved.failure()).toBeNull()
})
