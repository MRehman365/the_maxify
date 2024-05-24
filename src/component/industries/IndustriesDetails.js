import React, { useEffect } from "react";

import WelcomeImg from "../../assets/welcome-img.jpg";
import { useNavigate } from "react-router-dom";
import OurSuccessStories from "../home/OurSuccessStories";
import MetaData from "../../layout/MetaData";
const IndustriesDetails = ({
  title,
  name,
  description1,
  description2,
  img,
  img2,
  IndustriesSubData,
  title2,
  text,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const navigate = useNavigate();

  return (
    <>
      <MetaData titles={`Maxify industries ${name}`} />
      <div className="element-banner  lg:pt-[13%] lg:pb-[13%] sm:pt-[23%] sm:pb-[7%] industry-banner">
        <img className="banner" src={img2} alt="jpg" />
        <div className="container-section">
          <div className="element-banner-content w-[55%]">
            <h1 className=" sm:text-[24px] font-[600] md:text-[35px] sm:leading-[32px] lg:leading-[50px] lg:text-[40px] text-white">
              {title2}
            </h1>
            <p className="para sm:hidden md:block">{text}</p>
          </div>
        </div>
      </div>
      <div className="container-section mat-50">
        <div className="grid grid-cols-12  gap-10">
          <div className="lg:col-span-7 xl:col-span-6 sm:col-span-12">
            <div className="border-line"></div>
            <div className="element-container">
              <h3 className="heading-h3 sm:text-xl font-[600] lg:text-3xl text-gray-600">{title}</h3>
              <p className="para1 sm:text-base lg:text-base mt-6 text-justify">{description1}</p>
              <p className="para1 sm:text-base lg:text-base mt-6 text-justify">{description2}</p>
              <button
                class="custom-btn btn-16 mt-8"
                onClick={() => navigate("/contact")}
              >
                <span>CONTACT US</span>{" "}
              </button>
            </div>
          </div>
          {/* <!-- ... --> */}
          <div className="lg:col-span-5 xl:col-span-6 sm:col-span-12 xl:mt-20 sm:mt-0">
            <div className="element-container lg:w-[100%] xl:h-[75%] lg:overflow-hidden">
              <div className="img-box">
                <img className="w-full" src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Custom eCommerce Development Services */}
      <div className="#3D3B40-section  sm:mt-10 xl:mt-0">
        <div className="container-section">
          <div className="border-line text-center m-auto"></div>
          <h3 className="heading-h3 text-center">
            Our Custom {name}
          </h3>
          <div className="grid grid-cols-12  gap-6 mat-50">
            {IndustriesSubData.map((item, i) => (
              <div
                className="lg:col-span-4 md:col-span-6 sm:col-span-12"
                key={i}
              >
                <div className="our-essence-box industries-details-box">
                  <h5 className="heading-h5">{item.heading}</h5>
                  <p className="white-color">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OurSuccessStories />
    </>
  );
};

export default IndustriesDetails;
