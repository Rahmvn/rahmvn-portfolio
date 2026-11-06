# Application architecture

The approved portfolio is a client-only React/strict TypeScript application built with Vite. React Router supplies declarative browser routes. Plain CSS and the established Figma custom properties supply presentation. No backend, credentials, CMS, component framework or global state package is required. The full-portfolio instruction supersedes the earlier homepage-only checkpoint.

```text
src/
  app/          Routing, titles, anchor focus, history and active sections
  assets/       Figma SVGs, verified brand marks and reviewed captures
  components/   Shared shell, navigation, cards, media, technologies and diagram
  content/      Typed public-safe project and revised résumé data
  pages/        Home, shared case-study template, résumé and not-found
  styles/       Colour/motion tokens, responsive screen CSS and A4 print CSS
  theme/        Persistent preference, system and cross-tab synchronization
public/         Early theme script, notices and generated PDF
scripts/        Local capture, visual verification and PDF generation
tests/          Browser behavior and axe accessibility checks
docs/           Provenance, decisions, workflows and verification
```

## Routes and navigation

| URL | Content / selected state |
| --- | --- |
| `/`, `/#home` | Homepage / Home |
| `/#projects`, `/#about`, `/#contact` | Homepage destination / visible section |
| `/projects/promotionsure` | PromotionSure / no homepage selection |
| `/projects/alabarin` | Alabarin / no homepage selection |
| `/projects/al-muflihoon` | School / no homepage selection |
| `/projects/pillars-of-pension` | Book / no homepage selection |
| `/resume` | Résumé / Résumé desktop and header link |
| Other URLs | Not-found / no selection |

`SiteNavigation` renders desktop labels and exported mobile tab icons. All four section links target homepage anchors from every route. `useActiveSection` combines intersection/scroll measurements with one selection. At a clamped page bottom the requested visible destination wins; wheel, touch or scroll keys release that preference. Side-by-side About/Contact use About as the passive desktop tie-breaker. Project routes never inherit Projects' selection.

`RouteEffects` updates title/description, focuses the destination without extra scrolling, handles direct/repeated hashes and restores history positions. Theme changes do not navigate or reset scroll. `vercel.json` configures Vite, `npm run build`, output directory `dist` and the documented Vercel SPA rewrite to index.html for direct routes. Vercel serves existing static assets/downloads before the SPA fallback. Hosted acceptance is separate from local build verification.

## Reusable boundaries and content

`App` composes header, routes and mobile navigation. `HomePage` owns hero/projects/about/contact; cards, contact links and footer are reusable. Four case studies use `ProjectPage`, `TechnologyList`, `ProjectMedia` and typed project data. Alabarin adds `SystemOverview`, with distinct approved desktop/mobile compositions, semantic text and exported connectors.

Project media uses a typed cover and optional two-image supporting records, each with its real width, height, alternative text and optional contain fitting. Projects can instead supply a small video record with a YouTube ID/title. `ProjectPage` renders one `ProjectVideo` in the existing supporting-media position when that record exists, otherwise the established image gallery.

An optional `thumbnail` overrides the homepage image independently of the case-study cover. PromotionSure uses its public landing page on the homepage and authenticated Practice captures in the case study. Alabarin retains the owner-approved cover on the homepage and its system diagram as case hero; the owner-selected video replaces both case-study screenshots. Cards honor each image's contain fitting to avoid clipping UI labels.

`ProjectVideo` uses the local cover as an accessible play button. No YouTube frame or thumbnail request is made until activation. The click creates a privacy-enhanced iframe, requests playback/captions, transfers keyboard focus and retains a direct YouTube fallback link. There is no playback on page arrival. The frame uses 16:9 proportions with a 200px minimum height to meet YouTube's minimum viewport at narrow widths. It unmounts on route departure and returns to the poster when revisited. No SDK or new dependency is required.

Figma supplies shorter mobile case-study paragraphs. `ResponsiveCopy` switches those exact variants with CSS; assistive technology receives the visible copy only. The résumé uses one dataset and DOM for screen/print. `ResumeText` adds slash break opportunities without changing copied text. No generic page builder was added. Actual pages replace the obsolete development checkpoint.

`content/site.ts` supplies the owner-confirmed public origin for the résumé contact and route canonical/Open Graph metadata. The homepage HTML includes initial metadata and README links to the live site. No extra self-link was added to the portfolio's Contact icons. The résumé's Portfolio link displays a concise screen label and the readable full domain in print.

## Themes, tokens and responsive layout

All seven original palette values remain intact; FIGMA_REFERENCE.md records provenance. Additional semantic aliases cover media, hover, mobile tabs and diagrams. Small labels use the established muted token where lighter Figma greys fail contrast. Geist is self-hosted, including extended coverage for the naira sign.

The blocking theme-init.js resolves saved preference before render, otherwise system preference. The existing hook supports blocked storage, system changes and cross-tab updates. Exported 70×38px toggle artwork sits in a 44px button.

Desktop reference: 1200px, content 1060px, gutters 70px. Mobile: 390px, content 342px, gutters 24px. Grid/flex normal flow preserves those proportions. At 850px navigation changes to pinned mobile tabs; intermediate desktop gutters reduce to 40px. This breakpoint is an engineering choice because no tablet frame exists. Bottom content padding and safe-area clearance protect pinned tabs. Contact slots shrink at narrow widths.

## Motion and accessibility

Entrance fades use 320ms/ease-out, card feedback 180ms, actions 160–180ms and theme colours 220ms/ease-in-out. No unmeasured entrance displacement or screenshot zoom scale is invented. Reduced motion disables animation, transitions and smooth scrolling.

Semantic landmarks/headings, skip navigation, visible keyboard focus, native links/buttons, anchor focus and accurate aria-current/aria-pressed support access. Decorative icons accompany visible labels; actual captures receive descriptive alternatives. Axe checks complement keyboard, overflow and visual checks; they do not constitute a complete manual screen-reader audit.

## Résumé printing

The available Abdulrahman_Saheed_CV_Revised.docx supplies revised facts, reconciled with Figma's revised résumé text. The requested old PDF is absent. No rejected redesign or source document is published; provenance limits are recorded in CONTENT_DECISIONS.md.

Print CSS uses physical A4, 10.58mm vertical/14.29mm horizontal margins, white paper/dark text, hidden site controls and unbroken experience entries. Links display full destinations. `npm run pdf:generate` builds and prints /resume in local headless Edge, verifying one page and link annotations before writing public/downloads and current dist/downloads. Regenerate after résumé/layout changes; see PDF_WORKFLOW.md.

## Testing

`npm run check` runs lint/type/build. Playwright uses production output and installed Edge. Foundation tests are preserved and adapted to real pages/downloads. Focused checks cover active states, history, assets/links, theme scroll preservation, print and axe WCAG A/AA scans on six pages in both themes at mobile/desktop widths. Browser screenshots are compared separately with actual Figma references. Local, source, retained-evidence and public-response claims remain distinct.
