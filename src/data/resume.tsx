import { Icons } from "@/components/icons";

export const DATA = {
  name: "Taylor Facen",
  initials: "TF",
  url: "https://taylorfacen.com",
  location: "Dallas, TX",
  locationLink: "https://www.google.com/maps/place/dallas",
  description:
    "I help organizations connect and empower their teams through democratized, holistic, and sustainable full-stack data operations.",
  summary:
    "I'm a data generalist who's believes the right data operations can take an organization from good to great. I'm interested in data operations, analytics engineering, data analysis and everything in between.",
  avatarUrl: "/me.png",
  skills: [
    "Data Engineering",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "dbt",
    "Product Analytics",
    "SQL",
    "Airflow",
    "Data Operations",
    "Indiehacking",
  ],
  contact: {
    email: "taylor.facen@gmail.com",
    social: {
      // GitHub: {
      //   url: "https://github.com/TaylorFacen",
      //   icon: Icons.github,
      // },
      LinkedIn: {
        url: "https://www.linkedin.com/in/taylorfacen/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/itsTayFay",
        icon: Icons.x,
      }
    },
  },

  work: [
    {
      company: "AngelList (Venture)",
      href: "https://www.angellist.com/",
      badges: [],
      location: "Remote",
      title: "Data Lead",
      logoUrl: "/angellist.avif",
      start: "2022",
      end: "Present",
      description:
        "Leading large scale, end-to-end data data projects spanning from data ingestion, data modeling, and to data analysis for stakeholders across the entire organization.",
    },
    {
      company: "Data Intern",
      badges: [],
      href: "https://customer.io/",
      location: "Remote",
      title: "Data Intern",
      logoUrl: "/cio.avif",
      start: "2021",
      end: "2021",
      description:
        "Implemented suite of automated tests to improve data quality. Revamped reporting for operations and sales team to reflect new sales workflow",
    },
    {
      company: "AllianceBernstein",
      href: "https://www.alliancebernstein.com",
      badges: [],
      location: "New York, NY",
      title: "Technology and Business Strategist",
      logoUrl: "/ab.avif",
      start: "2016",
      end: "2020",
      description:
        "Managed five projects that improved efficiency in trading and portfolio management in the firm’s fixed-income business. Developed scripts and programs that enhance our data acquisition, cleaning, analysis, and reporting processes using Python programming and data science skills.",
    }
  ],
  education: [
    {
      school: "Massachusetts Institute of Technology",
      href: "https://lgo.mit.edu/",
      degree: "LGO Fellow - MBA and Masters in Electrical Engineering and Computer Science",
      logoUrl: "/mit.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Howard University",
      href: "https://howard.edu/",
      degree: "B.S. Mathematics and B.A. Economics",
      logoUrl: "/howard.png",
      start: "2012",
      end: "2016",
    },
  ],
} as const;
