import React, { useEffect, useRef } from "react";
import { FaUserFriends } from "react-icons/fa";
import Img1 from "../../assets/img1.jpg";
import { FaCheck } from "react-icons/fa6";
import CountUp from "react-countup";
import "./animation.css";
import { Fade } from "react-awesome-reveal";
import { TweenMax, Cubic } from "gsap"; // Assuming GSAP is installed and imported properly

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
  //  
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
          <div className="grid grid-cols-12 sm:flex sm:flex-col-reverse md:mt-10 lg:flex-row lg:gap-20">
            {/* <!-- ... --> */}
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
             
             <div className="why-choose-card lg:mt-20">
             <h6 className="text-white sm:text-center text-[30px] heading-h2 lg:text-start mb-3">
                  WHY CHOOSE US
                </h6>
    <Fade duration={2000} delay={200}>
                <div class="mx-auto mt-16 max-w-2xl text-white sm:mt-10 md:mt-10 lg:mt-20 lg:max-w-4xl">
  <dl class="space-y-10 lg:space-y-5">
    <div class="relative why-container flex flex-col pl-16">
      <dt class="text-base font-semibold leading-7 text-900 flex items-center">
        <div class="flex md:flex sm:relative h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716630879/digital_solution_m3oe1b.png" alt="" />
        </div>
        <span class="ml-4 sm:relative sm:right-0   ">Tailored Web Solutions</span>
      </dt>
      <dd class="mt-2 ml-14  text-base leading-7 text-600">We specialize in the development of websites to help solve your unique business problems.</dd>
    </div>
    <div class="relative why-container flex flex-col pl-16">
      <dt class="text-base font-semibold leading-7 text-900 flex items-center">
        <div class="flex md:flex sm:relative h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
        <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/product_engineering.jpg_rbl3fi.png" alt="" />
        </div>
        <span class="ml-4 sm:relative sm:right-0">Innovative Product Applications</span>
      </dt>
      <dd class="mt-2 ml-14 text-base leading-7 text-600">From web app design development, we have the best product engineering services to enhance your customer experience, increasing brand awareness and driving sales.</dd>
    </div>
    <div class="relative why-container flex flex-col pl-16">
      <dt class="text-base font-semibold leading-7 text-900 flex items-center">
        <div class="flex sm:flex md:flex sm:relative h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
        <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716630879/digital_transformation_kyvely.png" alt="" />
        </div>
        <span class="ml-4 sm:relative sm:right-0">Seamless Digital Transformation</span>
      </dt>
      <dd class="mt-2 ml-14  text-base leading-7 text-600">With our customized digital marketing services, you will get everything you need to elevate your business standards with our endless marketing service endeavors.</dd>
    </div>
    <div class="relative flex flex-col pl-16 sm:hidden md:hidden">
      <dt class="text-base font-semibold leading-5 text-900 flex items-center">
        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
          </svg>
        </div>
        <span class="ml-4">Seamless Digital Transformation</span>
      </dt>
      <dd class="mt-2 text-base leading-7 text-600">With our customized digital marketing services, you will get everything you need to elevate your business standards with our endless marketing service endeavors.</dd>
    </div>
  </dl>
      
                </div></Fade>

             </div>
           </div>
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
              <div className="element-container">
                {/* <h6 className="text-white sm:text-center lg:text-start mb-3">
                  WHY CHOOSE US
                </h6> */}
                <h2 className="heading-h2 text-white">
                  Get Significant Boost To Your Business With Our Seamless
                  Professionals
                </h2>
                <div className="img-box mt-8">
                  <figure className="img-box-bg">
                    <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462516/myCloud/why-us-2_hm7mhc.png" alt="" />
                  </figure>
                  <figure className="image2">
                    <img className="rounded-lg" src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716797451/myCloud/why_choose_us_ulcrfw.png" alt="" />
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
