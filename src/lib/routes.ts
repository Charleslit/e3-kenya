export const routes = {
  home: '/',
  initiatives: {
    index: '/initiatives',
    osiligi: '/initiatives/osiligi-pad-project',
    western: '/initiatives/western-kenya',
    nairobi: '/initiatives/nairobi-outreach'
  },
  donate: '/donate',
  about: '/about',
  contact: '/contact',
  board:'/board'
} as const

export const footerNavItems = [
  { href: routes.about, title: "About Us" },
  { href: routes.initiatives.index, title: "Initiatives" },
  { href: routes.board, title: "Meet the Herd" },
  { href: routes.contact, title: "Contact" },
] as const

export type Route = typeof routes[keyof typeof routes] 