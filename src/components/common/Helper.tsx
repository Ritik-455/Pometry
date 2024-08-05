import { LinkedIcon, SlackIcon, TwitterIcon } from "./Icon";
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
    blogProfile: "/assets/images/home/svg/blog_profile.svg",
  },
  {
    blogImage: "/assets/images/home/webp/blog-img-2.webp",
    blogTitle: "The Role of Machine Learning in Data Analytics",
    blogProfile: "/assets/images/home/svg/blog_profile_2.svg",
  },
  {
    blogImage: "/assets/images/home/webp/blog-img-1.webp",
    blogTitle: "Making Decisions with data Analytics",
    blogProfile: "/assets/images/home/svg/blog_profile_3.svg",
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
