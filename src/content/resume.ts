// Factual reference: owner-supplied Abdulrahman_Saheed_CV_Revised.docx.
// Presentation: Figma 146:2 / 146:304 / 155:2. See CONTENT_DECISIONS.md.
export const identity = {
  name: 'Abdulrahman Saheed', role: 'Full-Stack Software Engineer', location: 'Abuja, Nigeria',
  email: 'rahmvn1@gmail.com', phone: '+234 814 285 7377', telephone: '+2348142857377',
  github: 'https://github.com/Rahmvn',
}

export const profile = 'Full-stack software engineer independently delivering commercial applications and client websites. Experience spans React, PostgreSQL/Supabase, payment and authorization workflows, and native Android reliability engineering.'

export const experience = [
  {
    organization: 'PromotionSure', dates: 'Jun 2026 – Present', role: 'Sole Software Developer',
    links: [{ label: 'Live platform', url: 'https://promotionsure.com.ng/' }, { label: 'GitHub', url: 'https://github.com/Rahmvn/promotionsure-engineering' }],
    bullets: [
      'Built and maintain a commercial civil-service exam-preparation platform launched July 2026; reported 420+ registered users, 70+ paying customers and ₦400,000+ cumulative revenue by approximately September 2026.',
      'Implemented server-validated Paystack payments, signed webhooks and idempotent entitlement activation.',
      'Developed Supabase Auth/PostgreSQL RLS authorization, timed exams, scoring, content versioning and support/email workflows.',
    ],
  },
  {
    organization: 'Al-Muflihoon International School', dates: 'May 2026 – Present', role: 'Independent Web Developer · paid client engagement',
    links: [{ label: 'Live website', url: 'https://almuflihoon.com.ng/' }, { label: 'GitHub', url: 'https://github.com/Rahmvn/Almuflihoon' }],
    bullets: [
      'Delivered a paid, ten-page responsive website for the school and continue to maintain it, including client-requested changes.',
      'Implemented mobile/keyboard navigation, enquiry forms, media interactions and discoverability metadata.',
    ],
  },
  {
    organization: 'Alabarin', dates: 'Sep – Oct 2026', role: 'Independent Software Engineer · independent project',
    links: [{ label: 'GitHub', url: 'https://github.com/Rahmvn/journey-continuity' }],
    bullets: [
      'Built a native Kotlin/Jetpack Compose Android application with Room-backed observations and checkpoint-based synchronization after interruptions.',
      'Implemented a React/TypeScript Trusted Viewer and authorized Node/TypeScript MCP service with scoped access and stale-read invalidation.',
      'Validated one bounded recovery of 895 queued observations against backend sequences and timestamps without duplicate sequences in that run.',
    ],
  },
  {
    organization: 'National Centre for Artificial Intelligence and Robotics (NCAIR)', dates: 'Jul – Sep 2026', role: 'SIWES Intern · Abuja, Nigeria', links: [],
    bullets: ['Completed about ten weeks of practical Python programming and Figma UI/UX training, including a budget tracker.'],
  },
] as const

export const skills = [
  { category: 'Languages', values: 'JavaScript, TypeScript, SQL, Kotlin' },
  { category: 'Frontend', values: 'React, React Router, Vite, HTML (markup), CSS (styling), responsive and accessible interfaces' },
  { category: 'Backend & data', values: 'Node.js, Supabase Auth, PostgreSQL, RLS/RPCs, Deno Edge Functions, Paystack webhooks' },
  { category: 'Mobile & tools', values: 'Jetpack Compose, Room, WorkManager, Git, Playwright, Vitest, Vercel' },
] as const
