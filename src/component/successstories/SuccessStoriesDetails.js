import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OurSuccessStories from "../home/OurSuccessStories";
import "./success.css";
import MetaData from "../../layout/MetaData";

const SuccessStoriesDetails = ({
  title,
  name,
  description1,
  description2,
  img,
  IndustriesSubData,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sharda-university/");
  };
  const handleClick2 = () => {
    navigate("/eye-care/");
  };
  const handleClick3 = () => {
    navigate("/chhota-school/");
  };

  return (
    <>
      <MetaData titles={`Maxify Industries success stories`} />
      <div className="element-banner lg:pt-[15%] lg:pb-[15%] sm:pt-[23%] sm:pb-[7%] success-banner">
        <div className="container-sectio sm:w-[90%] sm:mx-5 lg:w-[70%] lg:mx-20 ">
          <div className="element-banner-content">
            <h1 className="heading- sm:text-[20px] font-[700] sm:leading-[32px] lg:leading-[64px] lg:text-[56px] text-white">
              Revolutionize Brands into Success by Unlocking Your Potential with
              Maxify Web Solutions
            </h1>
            <p className=" sm:hidden md:block text-2xl">
              Revolutionizing Industries through Innovative Solutions
            </p>
          </div>
        </div>
      </div>
      <div className="width">
        <div className="top-content">
          <h2>
            Achieve Success By Unlocking Your Potential with Maxify Web
            Solutions
          </h2>
          <p>
            We are the ones turning your business into success and your goals.
            We believe that success is not just a goal but it is a destination
            filled with compassion, hard work, dedication. Either you are a
            business person or a person who is passionate to fulfil his dreams
            and get to the goals, we are standing by your side and we are with
            you at each step. We are proud of our remarkable achievements as we
            carry the crown that our clients have given us. We have the
            expertise, and our commitment is shown in the work we deliver.
          </p>
          {/* <button className="btn-readmore mt-4">Read More</button> */}
        </div>

        <div className="success">
          <h2>Client Success Stories</h2>
        </div>
        <div className="success-content mt-4">
          {/* <div className="success-conten flex gap-10 mt-4"> */}
          <div className="first-success">
            <div className="image-success">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462508/myCloud/university_internal_image_2_o2fgol.png" alt="" />
            </div>
            <div className="success-content">
              <h2 onClick={handleClick}>
                Uplifting The Digital Presence of Sharda University with Our
                Solutions
              </h2>
              <p>
                Maxify web solutions was given the opportunity to increase
                visibility of the Sharda University website.
              </p>
            </div>
          </div>

          <div className="first-success">
            <div className="image-success">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462449/myCloud/hospital_banner_k2xber.png" alt="" />
            </div>
            <div className="success-content">
              <h2 onClick={handleClick2}>
                Revamping and Enhancing The presence of Delhi Eye Care Website
              </h2>
              <p>
                Maxify Web Solutions been giving the best website design and
                digital marketing services embarked on a journey to upgrade
                Delhi Eye Care website.
              </p>
            </div>
          </div>

          <div className="first-success">
            <div className="image-success">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462485/myCloud/play_school_internal_image_2_ftnld7.png" alt="" />
            </div>
            <div className="success-content">
              <h2 onClick={handleClick3}>
                Revolutionizing Education by Integrating AI in My Chhota School
                Website
              </h2>
              <p>
                Maxify Web Solutions was given an opportunity to design and
                implement AI solutions to transform the education and give new
                manners to it.
              </p>
            </div>
          </div>
        </div>
        <button className="btn-success">See More</button>
      </div>

      <OurSuccessStories />
    </>
  );
};

export default SuccessStoriesDetails;
