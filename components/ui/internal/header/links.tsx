interface LinkItem {
  id: number;
  name: string;
  path: string;
}

export const Links: LinkItem[] = [
  { id: 1, name: "Committees", path: "/committees" },
  { id: 2, name: "Events", path: "/events" },
  { id: 3, name: "News", path: "/news" },
  { id: 4, name: "About", path: "/about" },
];
