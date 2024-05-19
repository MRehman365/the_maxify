import Img1 from "../assets/digital marketing banner image.png";
import shardaUniversity from "../assets/sharda-university.png";
import DelhiEyeCare from "../assets/Delhi-eye-care.png";
import MyChhoteSchool from "../assets/mychhoteschool.png";
import Ecommerce from "../assets/1714728390203_9gutvq_2_0.jpg";
import HealthCare from "../assets/1714742637478_i6y61k_2_0.jpg";
import education from "../assets/1714742535980_6mx8uu_2_0.jpg";
import Finance from "../assets/banking and financial image....png";
import AppDevelopment from "../assets/app development service banner.jpg";
import Graphic from "../assets/graphic.jpg";
import DigitalMarketing from "../assets/web development service banner.png";
import S1 from "../assets/university internal image 2.png";
import S2 from "../assets/hospital banner.png";
import S3 from "../assets/play school internal image 2.png";
import S4 from "../assets/s4.jpg";
import abImg from "../assets/company.jpg";
import leaderImg from "../assets/leadership image.png";
import careerImg from "../assets/career image..png";
export const NaveData = [
  // {
  //     url: "/",
  //     name: "Home"
  // },
  {
    url: "/services/",
    name: "Services",
    subservicemenu: true,

    insideName: [
      {
        dMenu: true,
        dText: {
          dName: "Services",
          text: "Explore exponential services catering to your business!.",
          b: "VIEW ALL SERVIES",
        },
      },

      {
        link: "/web-development/",
        img: DigitalMarketing,
        names: "Web Development",
      },

      {
        link: "/application-development/",
        img: AppDevelopment,
        names: "App Development",
      },
      {
        link: "/digital-marketing/",
        img: Img1,
        names: "Digital Marketing",
      },
    ],
  },
  {
    url: "/industries/",
    name: "Industries",
    subservicemenu: true,
    insideName: [
      {
        dMenu: true,
        dText: {
          dName: "Industries",
          text: "Take a peep into the industries we work with",
          b: "VIEW ALL INDUSTRIES",
        },
      },
      {
        link: "/ecommerce-services/",
        img: Ecommerce,
        names: "E-Commerce",
      },
      {
        link: "/health-care/",
        img: HealthCare,
        names: "Health Care",
      },
      {
        link: "/education/",
        img: education,
        names: "Education",
      },
      {
        link: "/indian-army/",
        img: Finance,
        names: "Banking & Finance",
      },
    ],
  },
  {
    url: "/success/",
    name: "Success Stories",
    subservicemenu: true,
    insideName: [
      {
        dMenu: true,
        dText: {
          dName: "Success Stories",
          text: "Explore Success and get a board of yours in our journey!.",
          b: "VIEW ALL SUCCESS STORIES",
        },
      },
      {
        link: "/sharda-university/",
        img: S1,
        names: "Sharda University",
      },
      {
        link: "/eye-care/",
        img: S2,
        names: "Delhi Eye Care",
      },
      {
        link: "/chhota-school/",
        img: S3,
        names: "Chhota School",
      },
    ],
  },
  {
    url: "/about-company/",
    name: "About us",
    // submenu: true,
    subservicemenu: true,
    insideName: [
      {
        dMenu: true,
        dText: {
          dName: "About Us",
          text: "Know more about us through Maxify Lens",
          b: "VIEW ALL ABOUT US",
        },
      },

      {
        link: "/about-company/",
        img: abImg,
        names: "Company",
      },

      {
        link: "/leadership-team/",
        img: leaderImg,
        names: "Leadership Team",
      },
      {
        link: "/career/",
        img: careerImg,
        names: "Career",
      },
    ],
  },

  // {
  //     url: "/blog",
  //     name: "Blog"
  // },
];
