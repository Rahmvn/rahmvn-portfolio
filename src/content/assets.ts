// Exact exported Figma assets. Source nodes and approved replacements: docs/ASSETS.md.
import contactLight_email from '../assets/design/15-2-imgEmailVectorIcon.svg'
import contactLight_whatsapp from '../assets/design/15-2-imgWhatsAppVectorIcon.svg'
import contactLight_github from '../assets/design/15-2-imgGitHubVectorIcon.svg'
import contactLight_x from '../assets/design/15-2-imgXVectorIcon.svg'
export const contactLight = {
  email: contactLight_email,
  whatsapp: contactLight_whatsapp,
  github: contactLight_github,
  x: contactLight_x,
} as const
import contactDark_email from '../assets/design/102-766-imgEmailVectorIcon.svg'
import contactDark_whatsapp from '../assets/design/102-766-imgWhatsAppVectorIcon.svg'
import contactDark_github from '../assets/design/102-766-imgGitHubVectorIcon.svg'
import contactDark_x from '../assets/design/102-766-imgXVectorIcon.svg'
export const contactDark = {
  email: contactDark_email,
  whatsapp: contactDark_whatsapp,
  github: contactDark_github,
  x: contactDark_x,
} as const
import navLight_home from '../assets/design/31-101-imgHomeIconVector.svg'
import navLight_projects from '../assets/design/31-101-imgProjectsIconVector.svg'
import navLight_about from '../assets/design/31-101-imgAboutIconVector.svg'
import navLight_contact from '../assets/design/31-101-imgContactIconVector.svg'
export const navLight = {
  home: navLight_home,
  projects: navLight_projects,
  about: navLight_about,
  contact: navLight_contact,
} as const
import navDark_home from '../assets/design/102-945-imgHomeIconVector.svg'
import navDark_projects from '../assets/design/102-945-imgProjectsIconVector.svg'
import navDark_about from '../assets/design/102-945-imgAboutIconVector.svg'
import navDark_contact from '../assets/design/102-945-imgContactIconVector.svg'
export const navDark = {
  home: navDark_home,
  projects: navDark_projects,
  about: navDark_about,
  contact: navDark_contact,
} as const
import themeAssets_light from '../assets/design/21-46-imgThemeLight.svg'
import themeAssets_dark from '../assets/design/21-46-imgThemeDark.svg'
export const themeAssets = {
  light: themeAssets_light,
  dark: themeAssets_dark,
} as const
import diagramAssets_desktop from '../assets/design/56-2-imgDataAndAuthorizationRoutes.svg'
import diagramAssets_desktopDark from '../assets/design/110-198-imgDataAndAuthorizationRoutes.svg'
import diagramAssets_mobile from '../assets/design/56-61-imgArchitectureConnectorsMobile.svg'
export const diagramAssets = {
  desktop: diagramAssets_desktop,
  desktopDark: diagramAssets_desktopDark,
  mobile: diagramAssets_mobile,
} as const
import technologyAssets_Supabase from '../assets/design/42-3-imgAuthenticBrandVectorSupabase.svg'
import technologyAssets_Kotlin from '../assets/design/56-2-imgAuthenticBrandVectorKotlin.svg'
import technologyAssets_Compose from '../assets/design/56-2-imgAuthenticBrandVectorCompose.svg'
import technologyAssets_Room from '../assets/design/56-2-imgRoomDatabaseIconEditableVector.svg'
import technologyAssets_TypeScript from '../assets/design/56-2-imgAuthenticBrandVectorTypeScript.svg'
import technologyAssets_AWS from '../assets/design/56-2-imgAwsEditableMonochromeIcon.svg'
import technologyAssets_MCP from '../assets/design/56-2-imgAuthenticBrandVectorMcp.svg'
import technologyAssets_Paystack from '../assets/design/42-3-imgPaystackEditableVectorMark.svg'
import technologyAssets_HTML5 from '../assets/design/69-180-imgHtml5EditableMonochromeVector.svg'
import technologyAssets_CSS3 from '../assets/brands/css3.svg'
import technologyAssets_Formspree from '../assets/design/69-180-imgFormspreeEditableMonochromeVector.svg'
import technologyAssets_Netlify from '../assets/design/69-180-imgNetlifyEditableMonochromeVector.svg'
import technologyAssets_Figma from '../assets/design/71-235-imgFigmaEditableMonochromeVector.svg'
import technologyAssets_Vercel from '../assets/design/71-235-imgVercelEditableMonochromeVector.svg'
export const technologyAssets = {
  Supabase: technologyAssets_Supabase,
  Kotlin: technologyAssets_Kotlin,
  Compose: technologyAssets_Compose,
  Room: technologyAssets_Room,
  TypeScript: technologyAssets_TypeScript,
  AWS: technologyAssets_AWS,
  MCP: technologyAssets_MCP,
  Paystack: technologyAssets_Paystack,
  HTML5: technologyAssets_HTML5,
  CSS3: technologyAssets_CSS3,
  Formspree: technologyAssets_Formspree,
  Netlify: technologyAssets_Netlify,
  Figma: technologyAssets_Figma,
  Vercel: technologyAssets_Vercel,
} as const
import mediaAssets_placeholder from '../assets/design/42-3-imgImageIconEditableVector.svg'
export const mediaAssets = {
  placeholder: mediaAssets_placeholder,
} as const
import react from '../assets/brands/react.svg'
import javascript from '../assets/brands/javascript.svg'
import vite from '../assets/brands/vite.svg'
import postgresql from '../assets/brands/postgresql.svg'
export const brandAssets = { React: react, JavaScript: javascript, Vite: vite, PostgreSQL: postgresql, ...technologyAssets } as const
