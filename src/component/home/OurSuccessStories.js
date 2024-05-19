import React from "react";
import { Link } from "react-router-dom";
import health from "../../assets/healthcare_image-removebg-preview (1).png";
import banking from "../../assets/banking_and_financial_image-removebg-preview.png";
import life from "../../assets/life_science_image-removebg-preview (2).png";
import industry from "../../assets/industrial_image-removebg-preview (2).png";
import telecom from "../../assets/telecom_and__media-removebg-preview (2).png";
import software from "../../assets/software_and_hi-tech-removebg-preview (2).png";
const OurSuccessStories = () => {
  return (
    <>
      <div className="gray-section">
        <div className="container-section">
          <h3 className="success-heading text-center para success-text  text mb-2">
          Industries Solutions and Expertise
          </h3>
          <div className="border-line text-center m-auto #525CEB-line"></div>
          <p className="para disabled text-center">
          Employing Services and Solutions, diversifying the needs of Industries across the globe
          </p>
          <div className="grid grid-cols-12 mat-50">
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
              <div className="home-success-stories one">
                <Link>
                  <img src={health} alt="" />
                  <div className="content">
                    {/* <p className="para">Health Care</p> */}
                    <p className="para">Prominent Healthcare Services</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
              <div className="home-success-stories two">
                <Link>
                  <img src={industry} alt="" />
                  <div className="content">
                    <p className="para">Empowering Industry Led process</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
              <div className="home-success-stories three">
                <Link>
                  <img src={life} alt="" />
                  <div className="content">
                    <p className="para">Redefining educational world</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
              <div className="home-success-stories four">
                <Link>
                  <img src={banking} alt="" />
                  <div className="content">
                    <p className="para">Streamlining Financial Services</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
              <div className="home-success-stories five">
                <Link>
                  <img src={telecom} alt="" />
                  <div className="content">
                    <p className="para">Reimagining Global Media</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
              <div className="home-success-stories six">
                <Link>
                  <img src={software} alt="" />
                  <div className="content">
                    <p className="para">Accelerated hi-tech softwares</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSuccessStories;
