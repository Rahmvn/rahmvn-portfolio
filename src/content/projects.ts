import type { brandAssets } from './assets'
import schoolHome from '../assets/projects/al-muflihoon-1440.webp'
import schoolAdmissions from '../assets/projects/al-muflihoon-admissions-390.webp'
import pensionHome from '../assets/projects/pillars-of-pension-1440.webp'
import pensionAuthor from '../assets/projects/pillars-of-pension-author-390.webp'
import alabarinCover from '../assets/projects/alabarin-cover.webp'
import alabarinAndroid from '../assets/projects/alabarin-android-start.webp'
import alabarinViewer from '../assets/projects/alabarin-trusted-viewer.webp'
import promotionPractice from '../assets/projects/promotionsure-practice-desktop.webp'
import promotionPracticeNarrow from '../assets/projects/promotionsure-practice-narrow.webp'
import promotionHome from '../assets/projects/promotionsure-home.webp'

export type Technology = keyof typeof brandAssets
export type ProjectImage = { src: string; alt: string; width: number; height: number; fit?: 'cover' | 'contain' }
const schoolOverview: ProjectImage = { src: schoolHome, alt: 'Al-Muflihoon International School public homepage on desktop.', width: 1440, height: 960 }
const pensionOverview: ProjectImage = { src: pensionHome, alt: 'Pillars of the Pension System in Nigeria book and launch homepage on desktop.', width: 1440, height: 960 }
const promotionOverview: ProjectImage = { src: promotionPractice, alt: 'PromotionSure Practice page with a timed question, answer options, progress and question navigation.', width: 1895, height: 947, fit: 'contain' }
export type Project = {
  slug: string; title: string; description: string; subtitle: string; introduction: string
  website?: string; repository: string; technologies: readonly Technology[]
  work: string; scope: string; areas: string; statusLabel: string; status: string
  captions: readonly [string, string]; outcomeTitle: string; outcome: string
  mobile?: { introduction?: string; work?: string; outcome?: string }
  media?: { thumbnail?: ProjectImage; cover: ProjectImage; supporting: readonly [ProjectImage, ProjectImage] }
}

// Public-safe editorial content. Evidence and meaningful corrections live in CONTENT_DECISIONS.md.
export const projects: readonly Project[] = [
  {
    slug: 'promotionsure', title: 'PromotionSure', description: 'Commercial examination-preparation platform',
    subtitle: 'Commercial examination-preparation platform',
    introduction: 'A live platform for exam preparation, account access and paid learning workflows.',
    website: 'https://promotionsure.com.ng/', repository: 'https://github.com/Rahmvn/promotionsure-engineering',
    media: { thumbnail: { src: promotionHome, alt: 'PromotionSure public landing page with its brand, promotion-exam introduction and product preview.', width: 1220, height: 660, fit: 'contain' }, cover: promotionOverview, supporting: [promotionOverview, { src: promotionPracticeNarrow, alt: 'PromotionSure Practice page on a narrow screen, showing answer choices and Previous and Next controls.', width: 748, height: 877, fit: 'contain' }] },
    technologies: ['React', 'JavaScript', 'Vite', 'Supabase', 'PostgreSQL', 'Paystack'],
    work: 'PromotionSure is a commercial examination-preparation platform. My work covers the application experience and the systems behind user accounts, paid access and learning workflows.',
    scope: 'Full-stack software engineering', areas: 'Authentication · Payments · Exam preparation', statusLabel: 'Availability', status: 'Live platform',
    captions: ['Timed practice with progress and question navigation', 'Practice controls on a narrow screen'], outcomeTitle: 'In use today',
    outcome: 'The public platform provides a live reference for the product, while the engineering showcase offers a focused view of its development without exposing private production code.',
  },
  {
    slug: 'alabarin', title: 'Alabarin', description: 'Journey-continuity system across Android and web',
    subtitle: 'Journey continuity when communication becomes uncertain',
    introduction: 'Android, web and MCP access to attributed Journey observations for trusted people, without treating uncertainty as proof of safety.',
    repository: 'https://github.com/Rahmvn/journey-continuity',
    media: {
      cover: { src: alabarinCover, alt: 'Alabarin video cover with the recorded Android limited-connectivity interface.', width: 1920, height: 1080, fit: 'contain' },
      supporting: [
        { src: alabarinAndroid, alt: 'Original Android Traveller Start Journey screenshot with destination and expected-arrival controls.', width: 672, height: 480, fit: 'contain' },
        { src: alabarinViewer, alt: 'Original authenticated Trusted Viewer screenshot showing historical Journey status and update time.', width: 1214, height: 554, fit: 'contain' },
      ],
    },
    technologies: ['Kotlin', 'Compose', 'Room', 'React', 'TypeScript', 'Supabase', 'AWS', 'MCP'],
    work: 'Alabarin addresses the information gap that can arise when someone becomes unreachable while travelling. The Android Traveller records Journey observations; the authenticated Trusted Viewer and MCP service let authorized people review available historical evidence without claiming to know whether the traveller is safe.',
    scope: 'Android · web · backend engineering', areas: 'Journeys · Access control · Viewer · MCP', statusLabel: 'Status', status: 'Hackathon submission · development paused',
    captions: ['Android Traveller: destination and arrival setup', 'Trusted Viewer: historical Journey status'], outcomeTitle: 'Verified across components',
    outcome: 'Live acceptance connected an Android-created Journey to the React Viewer and MCP service. Both returned matching values for 13 shared status fields; revoking the MCP session was also tested. This is a development milestone, not a claim of production-grade safety or native Alexa integration.',
    mobile: {
      introduction: 'Preserving Journey evidence for authorized trusted people when communication becomes uncertain.',
      work: 'Alabarin addresses the information gap when someone becomes unreachable during a journey. Android records observations, while the authenticated Viewer and MCP service provide authorized access to historical status. Uncertainty is clearly distinguished from proof of safety.',
      outcome: 'Acceptance tests connected an Android-created Journey to the React Viewer and MCP, matching 13 shared status fields. MCP session revocation was also verified. This is a development milestone, not a guarantee of safety.',
    },
  },
  {
    slug: 'al-muflihoon', title: 'Al-Muflihoon', description: 'Official website for Al-Muflihoon International School.',
    subtitle: 'Official school website, independently delivered',
    introduction: 'A responsive website for families exploring school programmes, admissions and campus life.',
    website: 'https://almuflihoon.com.ng/', repository: 'https://github.com/Rahmvn/Almuflihoon',
    media: { cover: schoolOverview, supporting: [schoolOverview, { src: schoolAdmissions, alt: 'School admissions guidance and Tahfeez placement information on mobile.', width: 390, height: 844, fit: 'contain' }] },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Formspree', 'Netlify'],
    work: "I independently built and continue to maintain Al-Muflihoon International School's official website as paid client work. The site brings Tahfeez, Arabic studies, core academics, boarding information and admissions enquiries into a clear, mobile-friendly experience.",
    scope: 'Independent web development', areas: 'Responsive design · Admissions · Contact', statusLabel: 'Status', status: 'Live official website · maintained',
    captions: ['School homepage and programme overview', 'Admissions information and enquiry routes'], outcomeTitle: 'Delivered for a real school',
    outcome: "The site serves as Al-Muflihoon International School's official public website. Families can explore its programmes, find admissions guidance and contact the school. Maintenance and updates continue.",
    mobile: {
      work: "I independently built and continue to maintain Al-Muflihoon International School's official website as paid client work. Families can explore Tahfeez, Arabic and core academics, boarding details and admissions enquiries through a clear, mobile-friendly experience.",
      outcome: "The site serves as the school's official public website, helping families explore programmes, find admissions guidance and make contact. I continue to support changes and maintenance.",
    },
  },
  {
    slug: 'pillars-of-pension', title: 'Pillars of Pension', description: 'Book and launch website, from design to deployment.',
    subtitle: 'Book and launch website, from design to deployment',
    introduction: 'A four-page site introducing a pension book, its author and the launch.',
    website: 'https://pillars-of-pension-website.vercel.app/', repository: 'https://github.com/Rahmvn/pillars-of-pension-website',
    media: { cover: pensionOverview, supporting: [pensionOverview, { src: pensionAuthor, alt: 'Pillars of Pension author biography page on mobile.', width: 390, height: 844, fit: 'contain' }] },
    technologies: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    work: 'I implemented the four-page website from the approved Figma design through HTML, CSS and JavaScript to publication. The work covered responsive layouts, book and author imagery, accessible navigation and more efficient image delivery for first-time visitors.',
    scope: 'Design-to-code · frontend development', areas: 'Responsive UI · Accessibility · Performance', statusLabel: 'Status', status: 'Live publication website',
    captions: ['Homepage and book presentation', 'Author and launch information'], outcomeTitle: 'Published and verified',
    outcome: 'The live website has Home, Book, Author and Launch pages. Accessibility and navigation checks were completed before publication. Image-performance improvements were measured in local mobile simulations, not as production Core Web Vitals.',
    mobile: {
      work: 'I implemented the website from the approved Figma design through HTML, CSS and JavaScript. The work covered responsive layouts, book and author imagery, accessible navigation and improving image delivery for mobile visitors.',
      outcome: 'The site is live with Home, Book, Author and Launch pages. Accessibility and navigation were checked before release. Mobile performance work was measured in local simulations, not production Core Web Vitals.',
    },
  },
]
