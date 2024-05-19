import React, { useEffect } from "react";

import WelcomeImg from "../../assets/welcome-img.jpg";
import { useNavigate } from "react-router-dom";
import OurSuccessStories from "../home/OurSuccessStories";
import "./success.css";
import success1 from "../../assets/university banner.png";
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

  return (
    <>
      <MetaData titles={`Maxify Industries success stories`} />
      <div className="element-banner success-banner">
                <div className="container-section">
                    <div className="element-banner-content">
                        <h1 className="heading-h1 text-white">Explore the Dynamic World of Industries with Maxify Web Solutions</h1>
                        <p className="para">Revolutionizing Industries through Innovative Solutions</p>
                    </div>
                </div>
                
            </div>
            <div className="width">
            <div className="top-content">
                  <h2>Digitizing customer service with conversational AI and automation for an agricultural solutions leader</h2>
                  <p>Overview of MAS CBDC challenge ANZ Bank, one of the 15 finalists in the Monetary Authority of Singapore (MAS) Global…</p>
                  <button className="btn-readmore mt-4">Read More</button>
                </div>

                <div className="success"><h2>Client Success Stories</h2></div>
                <div className="success-content mt-4">
                <div className="first-success">
                    <div className="image-success"><img src={success1} alt="" /></div>
                    <div className="success-content">
                      <h2>Uplifting The Digital Presence of Sharda University with Our Solutions</h2>
                      <p>Maxify web solutions was given the opportunity to increase visibility of the Sharda University website.</p>
                    </div>
                  </div>
                    
                  <div className="first-success">
                    <div className="image-success"><img src={success1} alt="" /></div>
                    <div className="success-content">
                      <h2>Revamping and Enhancing The presence of Delhi Eye Care Website</h2>
                      <p>Maxify Web Solutions been giving the best website design and digital marketing services embarked on a journey to upgrade Delhi Eye Care website.</p>
                    </div>
                  </div>

                  <div className="first-success">
                    <div className="image-success"><img src={success1} alt="" /></div>
                    <div className="success-content">
                      <h2>Revolutionizing Education by Integrating AI in My Chhota School Website</h2>
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
