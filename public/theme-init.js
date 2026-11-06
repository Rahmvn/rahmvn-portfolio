// Resolve before the application paints. Storage can be unavailable in private contexts.
(() => {
  let preference = null
  try {
    preference = localStorage.getItem('portfolio-theme')
  } catch {
    // System preference remains available without persistence.
  }
  const theme = preference === 'light' || preference === 'dark'
    ? preference
    : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
})()
