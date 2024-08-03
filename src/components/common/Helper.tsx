import {
  LoadExistingIcon,
  TimeTravelIcon,
  ThreeSlideIcon,
  OpenCore,
} from "../common/Icon";
export const NAV_LINKS_LIST = [
  { nav_tabs: "Home", href: "#home" },
  { nav_tabs: "Blog", href: "#blog" },
  { nav_tabs: "Our Team", href: "#team" },
  { nav_tabs: "Product Overview", href: "#overview" },
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
export const SOCIAL_LINKS_LIST = [
  {
    img: "/assets/images/home/webp/data-brand-img.png",
    height: 29,
  },
  {
    img: "/assets/images/home/webp/meta-img.png",
    height: 21,
  },
  {
    img: "/assets/images/home/webp/data-center-img.png",
    height: 34,
  },
  {
    img: "/assets/images/home/webp/google-analytice-img.png",
    height: 37,
  },
  {
    img: "/assets/images/home/webp/data-center-img.png",
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
import { Bulb, Commitment, Passion, Teamwork } from "./Icon";

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
        heading: "Discover risk and trends",
        para: "Push back to your existing dashboards or use our own UI for stunningvisualisation, data exploration and risk analysis",
    },
];

export const SPECIALTY_CARD_DATA = [
    {
        icon: <Bulb />,
        head: "Innovation",
        para: "We are challenging prevailing assumptions about graphs through simple solutions."
    },
    {
        icon: <Commitment />,
        head: "Commitment",
        para: "We are committed in our mission to eliminate the problems that plague the graph market today."
    },
    {
        icon: <Passion />,
        head: "Passion",
        para: "We care deeply about what we do. Sharing our success and findings with the wider graph community"
    },
    {
        icon: <Teamwork />,
        head: "Teamwork",
        para: "We are a team of ambitious and driven individuals, emphasising purpose and sense of belonging."
    },
]
