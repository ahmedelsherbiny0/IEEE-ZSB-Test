interface Chapter {
  id: number;
  name: string;
  description: string;
  href: string;
  path: string;
  secondaryPath: string;
  alt: string;
  identityColor: string;
  secondaryColor: string;
}

export const Chapters: Chapter[] = [
  {
    id: 1,
    name: "CS",
    description: "Computer Society Chapter",
    href: "/cs",
    path: "/Images/CS/IEEE CS.png",
    secondaryPath: "/Images/CS/IEEE CS White.png",
    alt: "CS Logo",
    identityColor: "#354a5f",
    secondaryColor: "#354a5f33",
  },
  {
    id: 2,
    name: "RAS",
    description: "Robotics & Automation Society Chapter",
    href: "/ras",
    path: "/Images/RAS/IEEE RAS.png",
    secondaryPath: "/Images/RAS/IEEE RAS White.png",
    alt: "RAS Logo",
    identityColor: "#f08114",
    secondaryColor: "#f0811433",
  },
  {
    id: 3,
    name: "PES",
    description: "Power & Energy Society Chapter",
    href: "/pes",
    path: "/Images/PES/PES Logo Color.png",
    secondaryPath: "/Images/PES/PES Logo White.png",
    alt: "PES Logo",
    identityColor: "#6eb43f",
    secondaryColor: "#6eb43f33",
  },
  {
    id: 4,
    name: "WIE",
    description: "Women In Engineering Affinity Group",
    href: "/wie",
    path: "/Images/WIE/WIE LOGO.png",
    secondaryPath: "/Images/WIE/WIE Logo White.png",
    alt: "WIE Logo",
    identityColor: "#802c92",
    secondaryColor: "#802c9233",
  },
];
