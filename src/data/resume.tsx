import { Icons } from "@/components/icons";
import { HomeIcon} from "lucide-react";

export const DATA = {
  name: "Revanth",
  initials: "A",
  url: "https://rev.io",
  location: "Chennai, TamilNadu",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "Turning Ideas into Code, One App at a Time",
  summary:
    "As an iOS and full-stack student developer at SRM University, Chennai, I specialize in creating end-to-end solutions. My expertise spans iOS development using Swift and SwiftUI, complemented by full-stack capabilities in building scalable web applications. A natural team leader with strong communication skills, I excel at delivering user-centric solutions while meeting tight deadlines and mentoring peers to achieve collective excellence.",
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

        navbar: true,
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
      href: "¸¸",
      degree: "BTECH CSE",
      logoUrl: "/Srmseal.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Velammal Vidyalaiya ",
      href: "",
      degree: "12th Grade",
      logoUrl: "/12.png",
      start: "2022",
      end: "2021",
    },
    {
      school: "The Little Kingdom Senior School,Theni",
      href: "",
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
      image: ""
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
      video: "",
    },
    {
      title: "Leaning Steps",
      href: "https://github.com/Rev0212s",
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
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
     
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
