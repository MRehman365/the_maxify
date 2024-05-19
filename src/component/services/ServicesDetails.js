import React, { useEffect } from "react";
import "./service.css";

import { IoIosArrowRoundForward } from "react-icons/io";
import OurSuccessStories from "../home/OurSuccessStories";
import MetaData from "../../layout/MetaData";
// import img2 from '../../assets/1715154300452_bjeoh5_2_0.jpg'

const ServicesDetails = ({
  title,
  name,
  description,
  description2,
  img,
  technologyTitle,
  technologydescription,
  technologyData,
  img2,
  title2,
  text,
  midsection,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <MetaData titles={`Maxify Industries ${name}`} />
      <div className="element-banner ">
        <img className="banner h-[30rem] brightness-75" src={img} alt="jpg" />
        <div className="container-section">
          <div className="element-banner-content">
            <h1 className="heading-h1 text-white"> {title2} </h1>
            <p className="para">{text}</p>
          </div>
        </div>
      </div>
      <div className="container-section mat-50">
        <div className="grid grid-cols-12  gap-10">
          <div className=" md:col-span-7 sm:col-span-12">
            <div className="border-line"></div>
            <div className="element-container">
              <h3 className="heading-h3 text-gray-600 ">{title}</h3>
              <p className="para1 text-lg mt-6 text-justify">{description}</p>

              <button class="custom-btn btn-16 mt-8">
                <span>Read More</span>{" "}
              </button>
            </div>
          </div>
          {/* <!-- ... --> */}

          <div className=" md:col-span-5 sm:col-span-12 mt-20">
            <div className="element-container">
              <div className="img">
                <img className="" src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service related technology  */}
      <div className="gray-section mat-50">
        <div className="container-section ">
          <div className="grid grid-cols-12  gap-4">
            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
              <div className="border-line"></div>
              <h3 className="heading-h3">{technologyTitle}</h3>
              <p className="para mt-3">{technologydescription}</p>
            </div>
            <div className="lg:col-span-8 md:col-span-6 sm:col-span-12">
              <div className="grid grid-cols-12  gap-4">
                {technologyData.map((data, i) => (
                  <div
                    className="lg:col-span-6 md:col-span-12 sm:col-span-12"
                    key={i}
                  >
                    <div className="service-related-technology">
                      <img src={data.technologyImg} alt="" />
                      <h5 className="heading-h5">{data.technologyName}</h5>
                      <p>{data.technologyAbout}</p>
                      <div className="arrow-icons">
                        <IoIosArrowRoundForward />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurSuccessStories />
    </>
  );
};

export default ServicesDetails;
