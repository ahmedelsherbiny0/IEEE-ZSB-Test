interface Section {
  title: string;
  links: SectionContentLink[];
}

// interface SectionContent {
// }

interface SectionContentLink {
  name: string;
  href: string;
}

export const sections: Section[] = [
  {
    title: "Quick Access",
    links: [
      {
        name: "Committees",
        href: "/committees",
      },
      {
        name: "Events",
        href: "/events",
      },
      {
        name: "News",
        href: "/news",
      },
      {
        name: "About",
        href: "/about",
      },
    ],
  },
  {
    title: "CS",
    links: [
      {
        name: "Front-End",
        href: "/cs/#frontend",
      },
      {
        name: "Back-End",
        href: "/cs/#backend",
      },
      {
        name: "Basic AI",
        href: "/cs/#basic-ai",
      },
      {
        name: "Advanced AI",
        href: "/cs/#advanced-ai",
      },
      {
        name: "Mobile",
        href: "/cs/#mobile",
      },
      {
        name: "Cyber Security",
        href: "/cs/#cyber-security",
      },
    ],
  },
  {
    title: "RAS",
    links: [
      {
        name: "Embedded Systems",
        href: "/ras/#embedded-systems",
      },
      {
        name: "ROS",
        href: "/ras/#ros",
      },
      {
        name: "PCB Design",
        href: "/ras/#pcb-design",
      },
      {
        name: "Mechanical",
        href: "/ras/#mechanical",
      },
    ],
  },
  {
    title: "PES",
    links: [
      {
        name: "Basic Automation",
        href: "/pes/#basic-automation",
      },
      {
        name: "Advanced Automation",
        href: "/pes/#advanced-utomation",
      },
      {
        name: "Basic Distribution",
        href: "/pes/#basic-distribution",
      },
      {
        name: "Advanced Distribution",
        href: "/pes/#advanced-distribution",
      },
      {
        name: "Smart Home",
        href: "/pes/#smart-home",
      },
      {
        name: "E-Mobility",
        href: "/pes/#e-mobility",
      },
      {
        name: "Mechanical",
        href: "/pes/#mechanical",
      },
    ],
  },
];
