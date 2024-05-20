import React from "react";
import WelcomeImg from "../../assets/OFFICE.png";
import { FaCircleCheck } from "react-icons/fa6";
import CountUp from "react-countup";
import Shape5 from "../../assets/shape5.png";
import { FaUsersGear } from "react-icons/fa6";
import OurMission from "../../assets/our-mission.jpg";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="welcome-section lg:mt-[50px] sm:mt-[20px]">
        <div className="container-section">
          <div className="grid grid-cols-12  gap-[5%]">
            <div className="lg:col-span-6 sm:col-span-12">
              <div className="element-container">
                <h6 className="text mb-2">WELCOME TO MAXIFY</h6>
                <div className="welcome"></div>
                <h2 className="heading-h3 text">
                  Simplifying, Strengthening Business Worldwide
                </h2>
                <p className="text-[#595959] sm:text-[1rem] lg:text-[1rem] xl:text-[1.2rem]  mt-6 text-justify">
                  Maxify is the right platform for all your development and
                  marketing needs. From Strategies to providing end-to-end
                  solutions we have it all covered. We provide our expertise in
                  eCommerce, digital marketing, web and app development
                  services. We help our customers create websites and
                  applications that are feature-rich and fast-performing with
                  human centered designs and experiences. We approach unique and
                  customized strategies that attract customers and helps grow
                  your business. Keeping customer as the foremost priority, we
                  empower your business with the best crafted solutions to get
                  the desired results and excel in the market. Our team of
                  experienced professionals is dedicated to delivering
                  high-quality services that drive success. By leveraging the
                  latest technologies and industry trends, we ensure your
                  business stays ahead of the competition. Partner with Maxify
                  to transform your vision into reality and achieve sustainable
                  growth. Let us help you maximize your potential and reach new
                  heights.
                </p>
                <p className="para para-red mt-4"></p>
                {/* <ul className='grid grid-cols-12 mt-4'>
                                    <li className='col-span-6 flex items-center mb-1'><span className='mr-1 para-red'><FaCircleCheck /></span> Nsectetur cing elit.</li>
                                    <li className='col-span-6 flex items-center mb-1'><span className='mr-1 para-red'><FaCircleCheck /></span> Nsectetur cing elit.</li>
                                    <li className='col-span-6 flex items-center mb-1'><span className='mr-1 para-red'><FaCircleCheck /></span> Nsectetur cing elit.</li>
                                    <li className='col-span-6 flex items-center mb-1'><span className='mr-1 para-red'><FaCircleCheck /></span> Nsectetur cing elit.</li>
                                </ul> */}
                <button
                  class="custom-btn btn-16 mt-8"
                  onClick={() => navigate("/services")}
                >
                  <span>Our Services</span>{" "}
                </button>
              </div>
            </div>
            {/* <!-- ... --> */}
            <div className="lg:col-span-6 sm:col-span-12 sm:mt-4 lg:mt-10">
              <div className="element-container">
                <div className="img-box">
                  <img src={WelcomeImg} alt="" />
                  {/* <div className="overlay-content">
                                        <div className="content">
                                            <div className='shapes'>
                                                <img src={Shape5} alt="" />
                                                <span><FaUsersGear /></span>
                                            </div>
                                            <div className='flex welcome-counter flex-col justify-center items-center mt-3'>
                                                <CountUp delay={2} end={89000} />
                                                <p className='para'>Satisfied Clients</p>
                                            </div>
                                        </div>

                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mission section */}
      {/* <div className="container-section mat-100">
                <div className="grid grid-cols-12  gap-4">
                    <div className='lg:col-span-4 md:col-span-6 sm:col-span-12'>
                        <div className="mission-box">
                            <img src={OurMission} alt="" />
                            <div className='cont'> <h5 className="heading-h5">Our Mission</h5>
                                <p className="para mt-1">Lorem is free text no use by other agencies.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-4 md:col-span-6 sm:col-span-12'>
                        <div className="mission-box">
                            <img src={OurMission} alt="" />
                            <div className='cont'> <h5 className="heading-h5">Our Vission</h5>
                                <p className="para mt-1">Lorem is free text no use by other agencies.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-4 md:col-span-6 sm:col-span-12'>
                        <div className="mission-box">
                            <img src={OurMission} alt="" />
                            <div className='cont'> <h5 className="heading-h5">Our Values</h5>
                                <p className="para mt-1">Lorem is free text no use by other agencies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    </>
  );
};

export default Welcome;
