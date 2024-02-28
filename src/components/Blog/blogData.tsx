import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 0,
    title: "Empowering Efficiency: ETAP Solutions Unleased",
    paragraph:
      "Our cutting-edge software empowers industries to optimize their opertions, enhance safety measures, and stream line processes.",
      image: "/images/about/etap.jpg",
      link:"/Common/PdfViewer",
  },
  {
    id: 1,
    title: "IOT Insights:Our visionary blog's approach and capabilites",
    paragraph:
      "We delve deep into the world of IOT, offering approachable explanations and showcasing its limitless capabilities.",
      image: "/images/about/missionPageIot.jpg",
      link:"/about",
    // author: {
    //   name: "Musharof Chy",
    //   image: "/images/blog/author-02.png",
    //   designation: "Content Writer",
    // },
    // tags: ["computer"],
    // publishDate: "2025",
  },
  {
    id: 2,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    link:'/blog-details'
    // author: {
    //   name: "Lethium Deo",
    //   image: "/images/blog/author-03.png",
    //   designation: "Graphic Designer",
    // },
    // tags: ["design"],
    // publishDate: "2025",
  },
];
export default blogData;
