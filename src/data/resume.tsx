import { Icons } from "@/components/icons";
import { HomeIcon} from "lucide-react";

export const DATA = {
  name: "Revanth",
  initials: "A",
  url: "https://rev.io",
  location: "Chennai, TamilNadu",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "CSE student at SRM University, Chennai, with a drive for creating impactful solutions through code. I love building things and helping people. Very active on Instagram.",
  summary:
    "As a CSE student at SRM University, Chennai, I’m passionate about building transformative iOS projects and full-stack applications. I thrive on crafting innovative solutions that tackle real-world challenges, whether working on solo projects or collaborating with talented peers. With a commitment to continuous growth, I’m driven to share knowledge and make a lasting impact in the tech community.",
  avatarUrl: "/profileimg.jpeg",
  skills: [
    "React",
    "Node.js",
    "Python",
    "Swift",
    "SQL",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "stexrevnish@gmail.com",
    tel: "+91 8778850830",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rev0212",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/revanthanand/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [{
    company: "Infosys",
    href: "Infosys",
    badges: [],
    location: "Mysore",
    title: "Swift Developer Intern",
    logoUrl: "/atomic.png",
    start: "April 2025",
    end: "May 2025",
    description:
      "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  },],
  education: [
    {
      school: "SRM Institue of Science and Technolgy",
      href: "https://buildspace.so",
      degree: "BTECH CSE",
      logoUrl: "/Srmseal.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Velammal Vidyalaiya ",
      href: "https://uwaterloo.ca",
      degree: "12th Grade",
      logoUrl: "/12.png",
      start: "2022",
      end: "2021",
    },
    {
      school: "The Little Kingdom Senior School,Theni",
      href: "https://wlu.ca",
      degree: "10th Grade",
      logoUrl: "/10.png",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "TicketBooking Chatbot",
      href: "",
      dates: "Sep 2024",
      active: true,
      description:
        "As a part of Smart India Hackathon me and my team build the Ticket Booking Chatbot Website, which is designed to help users book museum tickets online through a chatbot interface.",
      technologies: [
        "React.js",
        "MongoDb",
        "Kommunicate",
        "Dialogflow",
        "PayPal",
        "Node.js"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rev0212/SIH",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/SIH.png"
    },
    {
      title: "Jobby App",
      href: "",
      dates: "Nov 2024 - Present",
      active: true,
      description:
        "A ReactJS application for job listings and search with authentication and dynamic filtering , with API integrations from Nxtwave for job data and user management",
      technologies: [
        "React.js",
        "CSS",
        "Node.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rev0212/JobbyApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Leaning Steps",
      href: "",
      dates: "Feb 2024",
      active: true,
      description:
        "Developed a number plate detection system using python which helped to learn about openCv and stuff, Build various minor react.js,javascript,java application which helped me out to learn them and implment their features",
      technologies: [
        "python","react.js","java","node.js","sql"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Learning.jpg",
     
    },
    {
      title: "TailorFit",
      href: "",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "Developed an Ios Application that would provide bodymeasurement with one single photo and allows users to virtually try on cloths.",
      technologies: [
        "swift","figma","swiftUIKit","CoreMl","Python"
      ],
      links: [
        {
          type: "source",
          href: "https://github.com/Rev0212/TailorFit-UIKit",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "September 1th - 3rd, 2024",
      location: "SRM University, Chennai",
      description:
        "Developed a website that would help users to book museum tickets.",
      image:
        "SIH-logo.png",
     
      links: [],
    },
    {
      title: "NetArmor",
      dates: "Feb 14th - 16th, 2024",
      location: "SRM University, Chennai",
      description:
        "Net Armor is a robust password manager designed to securely store and manage your passwords while ensuring the highest level of security. This project includes features for generating strong, unique passwords, assessing the quality and strength of existing passwords, and securely encrypting them to protect against unauthorized access.",
      image:
        "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
      ],

} as const;
