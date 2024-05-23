import React, { useEffect, useRef } from "react";
import WhyChooseImg from "../../assets/why-us-1.png";
import WhyChooseImg2 from "../../assets/why-us-2.png";

import { FaUserFriends } from "react-icons/fa";
import Img1 from "../../assets/img1.jpg";
import { FaCheck } from "react-icons/fa6";
import CountUp from "react-countup";
import "./animation.css";
import { TweenMax, Cubic } from "gsap"; // Assuming GSAP is installed and imported properly
import profile1 from "../../assets/product engineering.jpg.png";
import profile2 from "../../assets/digital solution.png";
import profile3 from "../../assets/digital transformation.png";

const WhyChooseUs = () => {
  const cardsRef = useRef(null);

  // useEffect(() => {
  //   const cards = Array.from(cardsRef.current.querySelectorAll(".slider-item")); // Select slider items
  //   startAnim(cards);
  //   // console.log("object", cards)
  //   function startAnim(array) {
  //     if (array.length >= 4) {
  //       TweenMax.fromTo(
  //         array[0],
  //         0.5,
  //         { x: 0, y: 0, opacity: 0.75 },
  //         {
  //           x: 0,
  //           y: -120,
  //           opacity: 0.75,
  //           zIndex: 0,
  //           delay: 0.03,
  //           ease: Cubic.easeInOut,
  //           onComplete: sortArray(array),
  //         }
  //       );

  //       TweenMax.fromTo(
  //         array[1],
  //         0.5,
  //         { x: 79, y: 125, opacity: 1, zIndex: 1 },
  //         {
  //           x: 30,
  //           y: 0,
  //           opacity: 1,
  //           zIndex: 1,
  //           boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
  //           ease: Cubic.easeInOut,
  //         }
  //       );

  //       TweenMax.to(array[2], 0.5, {
  //         bezier: [
  //           { x: 0, y: 250 },
  //           { x: 65, y: 200 },
  //           { x: 79, y: 125 },
  //         ],
  //         boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
  //         zIndex: 1,
  //         opacity: 0,
  //         ease: Cubic.easeInOut,
  //       });

  //       TweenMax.fromTo(
  //         array[3],
  //         0.5,
  //         { x: 0, y: 400, opacity: 0, zIndex: 0 },
  //         { x: 0, y: 143, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut }
  //       );
  //     } else {
  //     }
  //   }

  //   function sortArray(array) {
  //     setTimeout(() => {
  //       const firstElem = array.shift();
  //       array.push(firstElem);
  //       startAnim(array);
  //     }, 3000);
  //   }
  // }, []);
  return (
    <>
      <div className="why-choose-use-section lg:py-16 sm:py-20 mt-10" id="whiye">
        {/* <div className="" id='stars'></div>
                <div className="" id='stars2'></div>
                <div className="" id='stars3'></div> */}
        <div className="container-section">
          <div className="grid grid-cols-12  gap-4">
            {/* <!-- ... --> */}
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
             
             <div className="why-choose-card sm:hidden md:block">
             <h6 className="text-white sm:text-center lg:text-start mb-3">
                  WHY CHOOSE US
                </h6>
               {/* <div className="slider-wrap">
                 <div id="card-slider" className="slider" ref={cardsRef}>
                   Render your card slider items here
                   <div className="slider-item">
                     <div className="animation-card_image">
                       <img src={profile2} alt="" />
                     </div>
                     <div className="animation-card_content">
                       <h4 className="animation-card_content_title title-2">
                         Tailored Web Solutions 1:
                       </h4>
                       <p className="animation-card_content_description p-2">
                         {" "}
                         We specialize in development of website to help solve
                         your unique business problems.
                       </p>
                     </div>
                   </div>
                   <div className="slider-item">
                     <div className="animation-card_image">
                       <img src={profile1} alt="" />
                     </div>
                     <div className="animation-card_content">
                       <h4 className="animation-card_content_title title-2">
                         Innovative Product Applications 2
                       </h4>
                       <p className="animation-card_content_description p-2">
                         {" "}
                         From web app design development, we have the best
                         product engineering services to enhance your customer
                         experience, increasing brand awareness and driving
                         sales.
                       </p>
                     </div>
                   </div>
                   <div className="slider-item">
                     <div className="animation-card_image">
                       <img src={profile3} alt="" />
                     </div>
                     <div className="animation-card_content">
                       <h4 className="animation-card_content_title title-2">
                         Seamless Digital Transformation 3
                       </h4>
                       <p className="animation-card_content_description p-2">
                         {" "}
                         With our customized digital marketing services, you
                         will get everything you need to elevate your business
                         standards with our endless marketing service
                         endeavors.
                       </p>
                     </div>
                   </div>
                   <div className="slider-item">
                     <div className="animation-card_image">
                       <img src={profile3} alt="" />
                     </div>
                     <div className="animation-card_content">
                       <h4 className="animation-card_content_title title-2">
                         Seamless Digital Transformation 4
                       </h4>
                       <p className="animation-card_content_description p-2">
                         {" "}
                         With our customized digital marketing services, you
                         will get everything you need to elevate your business
                         standards with our endless marketing service
                         endeavors.
                       </p>
                     </div>
                   </div>

                 </div>
               </div> */}
             </div>
           </div>
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
              <div className="element-container">
                <h6 className="text-white sm:text-center lg:text-start mb-3">
                  WHY CHOOSE US
                </h6>
                <h2 className="heading-h2 text-white">
                  Get Significant Boost To Your Business With Our Seamless
                  Professionals
                </h2>
                <div className="img-box mt-8">
                  <figure className="img-box-bg">
                    <img src={WhyChooseImg2} alt="" />
                  </figure>
                  <figure className="image2">
                    <img src={WhyChooseImg} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;

const MissionData = [
  {
    img: Img1,
    p: "There are many simply free text available variations of passages of but the majority have in some.",
    li1: "Support on website building",
    li2: "Support on website building",
    li3: "Support on website building",
  },
  {
    img: Img1,
    p: "There are many simply free text available variations of passages of but the majority have in some.",
    li1: "Support on website building",
    li2: "Support on website building",
    li3: "Support on website building",
  },
];
