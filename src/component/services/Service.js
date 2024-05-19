import React, { useEffect } from "react";
import "./service.css";

import { MdOutlineConstruction } from "react-icons/md";
import { ServiceData } from "./ServiceData";
import { useNavigate } from "react-router-dom";
import OurSuccessStories from "../home/OurSuccessStories";
import MetaData from "../../layout/MetaData";
import ServiceImg from "../../assets/service-img.png";
import WebImg from "../../assets/1714554235083_29zv92_2_0.jpg";
import ApplicationImg from "../../assets/mobile app.png";
import DigitalImg from "../../assets/1714567529414_2n6b6f_2_0.jpg";
const Service = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const navigate = useNavigate();

  return (
    <>
      <MetaData titles={`Maxify Industries Services`} />
      {/* serive banner */}
      <div className="element-banner service-banner">
        <div className="container-section">
          <div className="element-banner-content">
            <h1 className="heading-h1 text-white">Maxify Services</h1>
            <p className="para ">
              Maxifying Your Business Requirements with our tailored
              solutions to the table to beat the odds
            </p>
          </div>
        </div>
      </div>
      {/* service container */}
      <div className="container-section mat-50 mab-50">
        <div className="grid grid-cols-12  gap-6">
          <div className="lg:col-span-12 md:col-span-12 sm:col-span-12">
            <div className="grid grid-cols-12 single-service-box">
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 content">
                <div className="border-line"></div>
                <p className="para uppercase">
                  Tailored Mobile App Development Services
                </p>
                <h5 className="sevices-text ">
                  Top-Notch Mobile App Development Services that suit your
                  business needs the most. Commitment, creativity and
                  consistency are the strategies we adhere by to match your
                  expectations and demands.
                </h5>
              </div>
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 img">
                <img src={ApplicationImg} alt="" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-12 md:col-span-12 sm:col-span-12">
            <div className="grid grid-cols-12 single-service-box">
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 img">
                <img src={WebImg} alt="" />
              </div>
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 content">
                <div className="border-line"></div>
                <p className="para uppercase ">
                  Customized Web Development Services
                </p>
                <h5 className="sevices-text ">
                  {" "}
                  Our Web Development Services offers comprehensive solution
                  that brings your vision to life. Having expertise in website
                  development, we believe in delivering solutions that takes
                  your business to new heights.
                </h5>
              </div>
            </div>
          </div>
          <div className="lg:col-span-12 md:col-span-12 sm:col-span-12">
            <div className="grid grid-cols-12 single-service-box">
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 content">
                <div className="border-line"></div>
                <p className="para uppercase">Best Digital Marketing Agency</p>
                <h5 className="sevices-text">
                  Being the best digital marketing agency, we provide custom
                  SEO, SMO, PPC, and other marketing services that helps you in
                  growing your business.
                </h5>
              </div>
              <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 img">
                <img src={DigitalImg} alt="" />
              </div>
            </div>
          </div>
          {/* <div className='lg:col-span-12 md:col-span-12 sm:col-span-12' >
                        <div className="grid grid-cols-12 single-service-box">
                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 img">
                                <img src={ServiceImg} alt="" />
                            </div>
                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 content">
                                <div className="border-line"></div>
                                <p className="para uppercase">
                                    Graphic Designing
                                </p>
                                <h5 className="heading-h5 ">  Speed up time to market, reduce costs and drive sustainable innovation</h5>
                            </div>

                        </div>

                    </div> */}
        </div>
      </div>

      <OurSuccessStories />
    </>
  );
};

export default Service;
