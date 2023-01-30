const projects = [
  {
    name: "3D Chess Game",
    description: "Intuitive, vibrant, exciting 3D chess game based on OpenGL",
    pic: "/chess-game.png",
    tech: ["OpenGL", "C++"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://gitlab.com/phong940253/ChessGame3D",
      },
    ],
  },

  {
    name: "Title Review",
    description:
      "Website to honor the title for the University of Education in Ho Chi Minh City",
    pic: "/title-review.png",
    tech: ["Laravel", "PHP", "Mysql", "Jquery", "Bootstrap", "Sass"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "http://khenthuong.youth.hcmue.edu.vn/",
      },
    ],
  },

  {
    name: "QRCodeExtractor",
    description:
      "A Python based QR code extractor that uses OpenCV to detect and extract QR codes in any orientation.",
    pic: "/qr-code.png",
    tech: ["Python"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/duonggiakhanhb/DIP2021",
      },
    ],
  },
  {
    name: "KillAppGnomeExtension",
    description: "Force quit or kill application.",
    pic: "https://cdn-icons-png.flaticon.com/512/115/115804.png",
    tech: ["JavaScript"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/duonggiakhanhb/Killapp_GNOME_Extensions",
      },
    ],
  },
];

export const extraProjects = [
  {
    name: "2learners LMS",
    type: "Application",
    description:
      "This project show all information about Ho Chi Minh City University of Education - Informatics Teacher Education (THSP).",
    tech: ["Django", "Postgresql", "Python", "Docker"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://www.2learner.edu.vn",
      },
    ],
  },
  {
    name: "Book recommendation",
    type: "Personal",
    description:
      "A recommendation machine to recommend people to buy a related book",
    tech: ["Django", "Python"],
    links: [
      {
        label: "Project",
        icon: "link",
        url: "gitlab.com/tienphan168/book-recommendations",
      },
    ],
  },
  {
    name: "Vietnamese Food reviews sentiment analysis",
    type: "Personal",
    description: "To show the sentiment in food comments",
    tech: ["Node.js"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://gitlab.com/tienphan168/food-review-sentiments",
      },
    ],
  },
  {
    name: "Chinese Language LMS",
    type: "Education",
    description:
      "A freelance app for students to learn Chinese Language by themselves",
    tech: ["Django", "Python", "Postgresql"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://www.antyuyan.com/",
      },
    ],
  },
  {
    name: "Book store",
    type: "Application",
    description:
      "An application of ecommerce to sell and manage books, with an online banking",
    tech: ["Django", "Python", "Postgresql"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://gitlab.com/tienphan168/online-bookstore",
      },
      {
        label: "Website",
        icon: "link",
        url: "https://basedjango.herokuapp.com/",
      },
    ],
  },
  // {
  //   name: "CollabCloud",
  //   type: "School",
  //   description:
  //     "Social networking platform allowing users to find collaborators for software projects.",
  //   tech: ["React", "Node.js", "PostgreSQL"],
  //   links: [
  //     {
  //       label: "Github",
  //       icon: "github",
  //       url: "https://github.com/collabcloud/project-collabcloud",
  //     },
  //     {
  //       label: "Demo",
  //       icon: "youtube",
  //       url: "https://youtu.be/bPAOhb8r5Co",
  //     },
  //   ],
  // },
  // {
  //   name: "freeflo.io",
  //   type: "Hackathon",
  //   description:
  //     "Full stack web application enabling collaborative & open source journalism",
  //   tech: ["React", "Redux", "Next.js"],
  //   links: [
  //     {
  //       label: "Github",
  //       icon: "github",
  //       url: "https://github.com/white-van/freeflo.io",
  //     },
  //     {
  //       label: "Demo",
  //       icon: "youtube",
  //       url: "https://www.youtube.com/watch?v=pXDF2kgQGtk",
  //     },
  //   ],
  // },
  // {
  //   name: "Portfolio V1",
  //   type: "Personal",
  //   description: "My old personal portfolio, deployed with Heroku",
  //   tech: ["React", "Express", "MongoDB"],
  //   links: [
  //     {
  //       label: "Github",
  //       icon: "github",
  //       url: "https://github.com/jcserv/portfoliov1",
  //     },
  //     {
  //       label: "Website",
  //       icon: "link",
  //       url: "https://infinite-inlet-11529.herokuapp.com/",
  //     },
  //   ],
  // },
  // {
  //   name: "HarMoney",
  //   type: "Hackathon",
  //   description: "Mobile application enabling users to split transactions",
  //   tech: ["React Native", "Node.js"],
  //   links: [
  //     {
  //       label: "Github",
  //       icon: "github",
  //       url: "https://github.com/matthuynh/harmoney",
  //     },
  //     {
  //       label: "Demo",
  //       icon: "youtube",
  //       url: "https://youtu.be/s13y0c__6u4",
  //     },
  //     {
  //       label: "Devpost",
  //       icon: "devpost",
  //       url: "https://devpost.com/software/harmoney-ci42yp",
  //     },
  //   ],
  // },
  // {
  //   name: "InsurApp",
  //   type: "Hackathon",
  //   description: "Micro insurance mobile app using image recognition",
  //   tech: ["Android Studio", "Flask", "AWS"],
  //   links: [
  //     {
  //       label: "Github",
  //       icon: "github",
  //       url: "https://github.com/jcserv/InsurApp",
  //     },
  //   ],
  // },
  // {
  //   name: "VapeSafe",
  //   type: "Hackathon",
  //   description:
  //     "Mobile + hardware solution allowing users to quit vaping, won 3rd Place",
  //   tech: ["Android Studio", "Arduino"],
  //   links: [
  //     {
  //       label: "Github",
  //       icon: "github",
  //       url: "https://github.com/leviaviv28/VapeSafe-EngHack2019",
  //     },
  //     {
  //       label: "Devpost",
  //       icon: "devpost",
  //       url: "https://devpost.com/software/vapesafe/",
  //     },
  //   ],
  // },
  // {
  //   name: "ETH-Aion Atomic Swap",
  //   type: "Hackathon",
  //   description:
  //     "Atomic swap protocol for ETH & Aion cryptocurrencies, earning Top 6",
  //   tech: ["Java"],
  //   links: [
  //     {
  //       label: "Github",
  //       icon: "github",
  //       url: "https://github.com/jcserv/AtomicSwap",
  //     },
  //   ],
  // },
];

export default projects;
