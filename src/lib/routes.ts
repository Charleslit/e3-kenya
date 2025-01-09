export const routes = {
  home: "/",
  sisterherd: "/sisterherd",
  initiatives: {
    index: "/initiatives",
    osiligi: "/initiatives/osiligi-pad-project",
  },
  herd: "/herd",
  tracks: "/tracks",
  chronicles: "/chronicles",
  donate: "/donate",
} as const

export const footerNavItems = [
  { href: routes.sisterherd, title: "Sisterherd Strong" },
  { href: routes.initiatives.index, title: "Herd Initiatives" },
  { href: routes.herd, title: "Meet the Herd" },
  { href: routes.tracks, title: "Help Us Make Tracks" },
  { href: routes.chronicles, title: "Herd Chronicles" },
] as const

export type Route = typeof routes[keyof typeof routes] 