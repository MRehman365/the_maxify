import React, { useEffect, useState } from "react";
import "./service.css";

import { IoIosArrowRoundForward } from "react-icons/io";
import OurSuccessStories from "../home/OurSuccessStories";
import MetaData from "../../layout/MetaData";
import ContactForm from "../ContactForm";
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
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <MetaData titles={`Maxify Industries ${name}`} />
      <div className="relative">
        <div className="element-banner lg:pt-[15%] lg:pb-[12%] md:pt-[25%] md:pb-[10%] sm:pt-[24%] sm:pb-[11%] ">
          <img className="banner" src={img} alt="jpg" />
          <div className="container-section">
            <div className="element-banner-content sm:w-full md:w-[60%] lg:w-[50%]">
              <h1 className="heading-  sm:text-[24px] font-[600] md:text-[35px] sm:leading-[32px] lg:leading-[50px] lg:text-[40px] text-white">
                {title2}{" "}
              </h1>
              <p className="para sm:hidden md:block">{text}</p>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-14">
          <div className="grid grid-cols-12 sm:gap-3 lg:gap-[5%]">
            <div className="lg:col-span-7 xl:col-span-6 sm:col-span-12">
              <div className="border-line"></div>
              <div className="element-container">
                <h3 className="heading-h3 sm:text-xl font-[600] lg:text-3xl text-gray-600">
                  {title}
                </h3>
                <p className="para1 sm:text-base lg:text-base mt-6 text-justify">
                  {description}
                </p>

                <button class="custom-btn btn-16 mt-8" onClick={()=>setShowForm(!showForm)}>
                  <span>Contact us</span>{" "}
                </button>
              </div>
            </div>
            {/* <!-- ... --> */}

            <div className="lg:col-span-5 xl:col-span-6 sm:col-span-12 lg:mt-5 sm:mt-0">
              <div className="element-container lg:w-[100%] xl:h-[70%] lg:overflow-hidden">
                <div className="img">
                  <img className="w-full" src={img2} alt="" />
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

        {showForm ? (
          <div className="fixed top-[13%] lg:left-[15%] sm:left-[5%] z-[100] lg:w-[70%] sm:w-[90%]">
            <ContactForm showForm={showForm} setShowForm={setShowForm} />
          </div>
        ) : (
          ""
        )}

        <OurSuccessStories />
      </div>
    </>
  );
};

export default ServicesDetails;
