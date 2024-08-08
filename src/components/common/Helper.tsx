// import benSteerImg from "./assets/images/ourteam/png/hero-team-img.png";

import { LinkedIcon, SlackIcon, TwitterIcon } from "./Icon";
import {
  LoadExistingIcon,
  TimeTravelIcon,
  ThreeSlideIcon,
  OpenCore,
  Bulb,
  Commitment,
  Passion,
  Teamwork,
} from "../common/Icon";
export const SOCIAL_ICON = [
  {
    icon: <SlackIcon />,
    link: "https://slack.com/intl/en-in/",
  },
  {
    icon: <LinkedIcon />,
    link: "https://www.linkedin.com/login",
  },
  {
    icon: <TwitterIcon />,
    link: "https://x.com/",
  },
];
export const NAV_LINKS_LIST = [
  { navlink: "Home", url: "#home" },
  { navlink: "Blog", url: "#blog" },
  { navlink: "Our Team", url: "#team" },
  { navlink: "Product Overview", url: "#overview" },
];
export const EASY_TABS_DATA = [
  {
    numb: 1,
    heading: "Ingest your data",
    para: "Ingest your data from anywhere; streams, relational databases, cloudwarehousing or even existing GraphDBs",
  },
  {
    numb: 2,
    heading: "Go beyond SQL and Cypher",
    para: "Intuitive GraphQL end-points combined with powerful Python APIs foradvanced querying and ML",
  },
  {
    numb: 3,
    heading: "Discove rrisk and trends",
    para: "Push back to your existing dashboards or use our own UI for stunningvisualisation, data exploration and risk analysis",
  },
];
export const BLOG_DATA = [
  {
    blogImage: "/assets/images/home/webp/blog-img-1.webp",
    blogTitle: "Making Decisions with data Analytics",
    blogProfile: "/assets/images/home/svg/blog-profile.svg",
  },
  {
    blogImage: "/assets/images/home/webp/blog-img-2.webp",
    blogTitle: "The Role of Machine Learning in Data Analytics",
    blogProfile: "/assets/images/home/svg/blog-profile-2.svg",
  },
  {
    blogImage: "/assets/images/home/webp/blog-img-1.webp",
    blogTitle: "Making Decisions with data Analytics",
    blogProfile: "/assets/images/home/svg/blog-profile-3.svg",
  },
];
export const FOOTER_ITEMS = [
  {
    columnClass: "max-lg:col-2 max-md:col-3 max-sm:col-8",
    titleName: "Company",
    items: ["Product", "About", "Contact"],
  },
  {
    columnClass:
      "max-lg:col-4 max-md:col-4 max-md:order-3 max-sm:col-12 max-sm:mt-8",
    titleName: "Platform",
    items: [
      "Graph QL",
      "Data Consolidation",
      "JupyterNotebook Support",
      "Custom Analytics",
      "Data Visualisation",
    ],
  },
  {
    columnClass:
      "max-lg:col-4 max-md:col-6 max-md:order-4 max-sm:col-12 max-md:mt-8",
    titleName: "Use cases",
    items: [
      "Company Shell Detection",
      "Cyber Security",
      "Covid Relief Schemes Fraud",
      "NFT Wash Trading",
      "DEFI Sybil Detection",
    ],
  },
  {
    columnClass:
      "max-lg:col-2 max-md:col-3 max-sm:col-4 max-md:order-2 max-md:mt-0",
    titleName: "Resources",
    items: ["Docs", "Blog", "Community"],
  },
];
export const SOCIAL_LINKS_LIST = [
  {
    img: "/assets/images/home/webp/data-brand-img.webp",
    height: 29,
  },
  {
    img: "/assets/images/home/webp/meta-img.webp",
    height: 21,
  },
  {
    img: "/assets/images/home/webp/data-center-img.webp",
    height: 34,
  },
  {
    img: "/assets/images/home/webp/google-analytics-img.webp",
    height: 37,
  },
  {
    img: "/assets/images/home/webp/data-center-img.webp",
    height: 34,
  },
];
export const SAY_HELLO_CONTENT = [
  {
    content: "Simple deployment",
  },
  {
    content: "Simple data ingestion",
  },
  {
    content: "Time relative ML and queries",
  },
  {
    content: "Millisecond training and response",
  },
];
export const SAY_HELLO_CARDS = [
  {
    icon: <LoadExistingIcon />,
    heading: "Load existing data",
    para: "Ingest and load data from any source, Kafka, CSV, Parquet, SQL and many more. No need for expensive transformation pipelines or SME teams.",
  },
  {
    icon: <TimeTravelIcon />,
    heading: "Time Travel",
    para: "Move backwards and forwards in time, analysing your data without re-ingesting. Simply adjust the time range of your query!",
  },
  {
    icon: <ThreeSlideIcon />,
    heading: "Grapg ML",
    para: "Run native Graph Machine Learning (ML) on static and dynamic networks. Identify causal trends or risk across time. Raise alerts, and drive intelligent decisions.",
  },
  {
    icon: <OpenCore />,
    heading: "Open Core",
    para: "Our core platform is open source and available on GitHub.However, it has been completely reworked to be x10 faster and will be re-released soon for free.",
  },
];
export const SPECIALTY_CARD_DATA = [
  {
    icon: <Bulb />,
    heading: "Innovation",
    para: "We are challenging prevailing assumptions about graphs through simple solutions.",
  },
  {
    icon: <Commitment />,
    heading: "Commitment",
    para: "We are committed in our mission to eliminate the problems that plague the graph market today.",
  },
  {
    icon: <Passion />,
    heading: "Passion",
    para: "We care deeply about what we do. Sharing our success and findings with the wider graph community",
  },
  {
    icon: <Teamwork />,
    heading: "Teamwork",
    para: "We are a team of ambitious and driven individuals, emphasising purpose and sense of belonging.",
  },
];
export const FOOTER_ELLIPSE = [
  {
    className: "blur-[67px] w-[423px] h-[310px] -top-[18%] -left-[13%]",
  },
  {
    className: "blur-[50px] w-[340px] h-[171px] -top-[16%] right-[19%]",
  },
  {
    className: "blur-[85px] w-[340px] h-[171px] -bottom-[16%] left-[19%]",
  },
  {
    className: "blur-[100px] w-[423px] h-[310px] -bottom-[18%] -right-[13%]",
  },
];
export const OUR_TEAM_IMAGES = [
  {
    img: "/assets/images/ourteam/webp/ben-steer-slider-img.webp",
  },
  {
    img: "/assets/images/ourteam/webp/ben-steer-slider-img.webp",
  },
  {
    img: "/assets/images/ourteam/webp/ben-steer-slider-img.webp",
  },
  {
    img: "/assets/images/ourteam/webp/ben-steer-slider-img.webp",
  },
  {
    img: "/assets/images/ourteam/webp/ben-steer-slider-img.webp",
  },
  {
    img: "/assets/images/ourteam/webp/ben-steer-slider-img.webp",
  },
  {
    img: "/assets/images/ourteam/webp/ben-steer-slider-img.webp",
  },
  {
    img: "/assets/images/ourteam/webp/ben-steer-slider-img.webp",
  },
  {
    img: "/assets/images/ourteam/webp/ben-steer-slider-img.webp",
  },
  {
    img: "/assets/images/ourteam/webp/ben-steer-slider-img.webp",
  },
];
export const MEET_OUR_TEAM = [
  {
    para: "Ben is the CTO and Co-Founder at Pometry as well as an honorary researcher at Queen Mary University of London. His work in complex networks and distributed systems focuses on the development of Raphtory, a large-scale stream processing solution for temporal graph analytics. His secondary focus as a board member for the Linked Data Benchmark Council is to define frameworks where different graph based technologies can be fairly tested and compared and help researchers open new frontiers in high-performance graph data management.",
    name: "Dr Ben Steer",
    profession: "CTO",
  },
  {
    para: "Ben is the CTO and Co-Founder at Pometry as well as an honorary researcher at Queen Mary University of London. His work in complex networks and distributed systems focuses on the development of Raphtory, a large-scale stream processing solution for temporal graph analytics. His secondary focus as a board member for the Linked Data Benchmark Council is to define frameworks where different graph based technologies can be fairly tested and compared and help researchers open new frontiers in high-performance graph data management.",
    name: "Dr Ben Steer",
    profession: "CTO",
  },
  {
    para: "Ben is the CTO and Co-Founder at Pometry as well as an honorary researcher at Queen Mary University of London. His work in complex networks and distributed systems focuses on the development of Raphtory, a large-scale stream processing solution for temporal graph analytics. His secondary focus as a board member for the Linked Data Benchmark Council is to define frameworks where different graph based technologies can be fairly tested and compared and help researchers open new frontiers in high-performance graph data management.",
    name: "Dr Ben Steer",
    profession: "CTO",
  },
];
