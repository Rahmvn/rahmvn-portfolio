# Website résumé PDF workflow

The factual source available here is the revised DOCX, not the absent old PDF. It stays ignored and unmodified. The rejected redesign is not used. Screen and print render the single dataset in `src/content/resume.ts`, through `ResumePage`.

## Generate

Use the locked npm install and installed Microsoft Edge:

```sh
npm run pdf:generate
```

This builds production output, starts a loopback-only preview on 4319, waits for résumé/fonts, applies print/light media, and prints tagged A4 with CSS page size. It checks four experience entries, the PDF signature, exactly one page and link annotations before writing:

- `public/downloads/Abdulrahman_Saheed_CV.pdf` — subsequent dev/build download.
- `dist/downloads/Abdulrahman_Saheed_CV.pdf` — current production preview download.

Browser/server teardown is automatic. Generation metadata and source/output SHA-256 are recorded in ignored `.local/pdf/generation.json`. PDF bytes can change with generation timestamps. Regenerate whenever résumé data, JSX or print-relevant CSS changes. No reference file is copied into public assets.

The source checksum also includes `src/content/site.ts`, which supplies the owner-confirmed portfolio URL. Generation requires the résumé's Portfolio contact link and checks that its destination is an actual PDF URI annotation before writing the download.

## Print and verify

The webpage's Print button invokes the native print dialog. Select A4 portrait, 100% scale and disable browser-added headers/footers. CSS supplies 10.58mm vertical/14.29mm horizontal margins, light paper, dark text, clean section rules and unsplit entries. Site navigation/actions/footer are hidden, and links show full destinations. Printing from either screen theme uses the same light output.

The delivered PDF was independently parsed with development-only pypdf6.21.4 and rendered with PDFium/pypdfium2 5.14.0, outside npm/runtime dependencies. Verification found:

- One page,594.95996×841.91998pt (approximately209.89×297.01mm; Chromium's A4 rounding).
- Selectable/extractable text, including the naira sign, qualified commercial metrics, all four entries and corrected skills.
- Nine URI annotations: email, phone, portfolio, GitHub and the five project links in the résumé. The portfolio prints as `rahmvn-portfolio.vercel.app` and links to `https://rahmvn-portfolio.vercel.app/`.
- Tagged structure and 16 self-contained font resources with Unicode maps:15 Type3 glyph-program resources from Chromium's variable-font printing, plus one embedded Type0 font resource. No external font dependency in the PDF.
- Actual PDFium rendering at794×1123px inspected against Figma155:2: no clipped text, split entry, missing glyph or second page. Minor renderer line-wrap/vertical-spacing differences remain; corrected skills intentionally differ from Figma's technical classification.

Local evidence: `.local/pdf/resume-a4.png`, `verification.json`, `generation.json`, `extracted.txt`. `.local/pdf/resume-print-browser.png` is an emulated browser print screenshot and is **not** a substitute for the actual rendered PDF page.

Keep Download unavailable if a future generation is absent or fails verification. The delivered artifact exists, passed these checks and is served by the native download link. Automated browser checks verify its HTTP signature, native download filename/completion, Print action and print-media behavior. No physical printer or other PDF engine was tested.
