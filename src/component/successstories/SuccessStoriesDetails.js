import React, { useEffect } from "react";

import WelcomeImg from "../../assets/welcome-img.jpg";
import { useNavigate } from "react-router-dom";
import OurSuccessStories from "../home/OurSuccessStories";
import "./success.css";
import success1 from "../../assets/university internal image 2.png";
import success2 from "../../assets/hospital banner.png";
import success3 from "../../assets/play school internal image 2.png";
import Img2 from "../../assets/img2.jpg";
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
    navigate('/sharda-university/');
  };
  const handleClick2 = () => {
    navigate('/eye-care/');
  };
  const handleClick3 = () => {
    navigate('/chhota-school/');
  };

  return (
    <>
      <MetaData titles={`Maxify Industries success stories`} />
      <div className="element-banner success-banner">
                <div className="container-section">
                    <div className="element-banner-content">
                        <h1 className="heading-h1 text-white">Revolutionize Brands into Success by Unlocking Your Potential with Maxify Web Solutions</h1>
                        <p className="para">Revolutionizing Industries through Innovative Solutions</p>
                    </div>
                </div>
                
            </div>
            <div className="width">
            <div className="top-content">
                  <h2>Achieve Success By Unlocking Your Potential with Maxify Web Solutions</h2>
                  <p>We are the ones turning your business into success and your goals. We believe that success is not just a goal but it is a destination filled with compassion, hard work, dedication. Either you are a business person or a person who is passionate to fulfil his dreams and get to the goals, we are standing by your side and we are with you at each step. We are proud of our remarkable achievements as we carry the crown that our clients have given us. We have the expertise, and our commitment is shown in the work we deliver.</p>
                  {/* <button className="btn-readmore mt-4">Read More</button> */}
                </div>

                <div className="success"><h2>Client Success Stories</h2></div>
                <div className="success-content mt-4">
                <div className="first-success">
                    <div className="image-success"><img src={success1} alt="" /></div>
                    <div className="success-content">
                      <h2  onClick={handleClick}>Uplifting The Digital Presence of Sharda University with Our Solutions</h2>
                      <p>Maxify web solutions was given the opportunity to increase visibility of the Sharda University website.</p>
                    </div>
                  </div>
                    
                  <div className="first-success">
                    <div className="image-success"><img src={success2} alt="" /></div>
                    <div className="success-content">
                      <h2 onClick={handleClick2}>Revamping and Enhancing The presence of Delhi Eye Care Website</h2>
                      <p>Maxify Web Solutions been giving the best website design and digital marketing services embarked on a journey to upgrade Delhi Eye Care website.</p>
                    </div>
                  </div>

                  <div className="first-success">
                    <div className="image-success"><img src={success3} alt="" /></div>
                    <div className="success-content">
                      <h2 onClick={handleClick3}>Revolutionizing Education by Integrating AI in My Chhota School Website</h2>
                      <p>Maxify Web Solutions was given an opportunity to design and implement AI solutions to transform the education and give new manners to it.</p>
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
