import React, { useEffect, useRef } from "react";
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
          <div className="grid grid-cols-12 sm:flex sm:flex-col sm:flex-col-reverse md:mt-10 lg:flex-row gap-4">
            {/* <!-- ... --> */}
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
             
             <div className="why-choose-card lg:mt-20">
             <h6 className="text-white sm:text-center  lg:text-start mb-3">
                  WHY CHOOSE US
                </h6>
                <div class="mx-auto mt-16 max-w-2xl text-white sm:mt-10 md:mt-10 lg:mt-20 lg:max-w-4xl">
  <dl class="space-y-10 lg:space-y-16">
    <div class="relative flex flex-col pl-16">
      <dt class="text-base font-semibold leading-7 text-900 flex items-center">
        <div class="flex sm:relative sm:right-12 h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
        </div>
        <span class="ml-4 sm:relative sm:right-14">Tailored Web Solutions</span>
      </dt>
      <dd class="mt-2 text-base leading-7 text-600">We specialize in the development of websites to help solve your unique business problems.</dd>
    </div>
    <div class="relative flex flex-col pl-16">
      <dt class="text-base font-semibold leading-7 text-900 flex items-center">
        <div class="flex sm:relative sm:right-12 h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
        <span class="ml-4 sm:relative sm:right-14">Innovative Product Applications</span>
      </dt>
      <dd class="mt-2 text-base leading-7 text-600">From web app design development, we have the best product engineering services to enhance your customer experience, increasing brand awareness and driving sales.</dd>
    </div>
    <div class="relative flex flex-col pl-16">
      <dt class="text-base font-semibold leading-7 text-900 flex items-center">
        <div class="flex sm:relative sm:right-12 h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </div>
        <span class="ml-4 sm:relative sm:right-14">Seamless Digital Transformation</span>
      </dt>
      <dd class="mt-2 text-base leading-7 text-600">With our customized digital marketing services, you will get everything you need to elevate your business standards with our endless marketing service endeavors.</dd>
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
</div>

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
                    <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462516/myCloud/why-us-2_hm7mhc.png" alt="" />
                  </figure>
                  <figure className="image2">
                    <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462515/myCloud/why-us-1_fc1zih.png" alt="" />
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
