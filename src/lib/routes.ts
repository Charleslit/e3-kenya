export const routes = {
  home: "/",
  about: "/about",
  initiatives: {
    index: "/initiatives",
    osiligi: "/initiatives/osiligi-pad-project",
    western: "/initiatives/western-kenya",
    nairobi: "/initiatives/nairobi-outreach",
  },
  board: "/board",
  impact: "/impact",
  contact: "/contact",
  donate: "/donate",
} as const

export const footerNavItems = [
  { href: routes.about, title: "About Us" },
  { href: routes.initiatives.index, title: "Initiatives" },
  { href: routes.board, title: "Meet the Herd" },
  { href: routes.impact, title: "Impact" },
  { href: routes.contact, title: "Contact" },
] as const

export type Route = typeof routes[keyof typeof routes] 