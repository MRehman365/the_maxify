import React, { useEffect } from "react";

import WelcomeImg from "../../assets/welcome-img.jpg";
import { useNavigate } from "react-router-dom";
import OurSuccessStories from "../home/OurSuccessStories";
import "./success.css";
import Img1 from "../../assets/img1.webp";
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
      <div className="element-banner service-banner">
        <div className="container-section">
          <div className="element-banner-content">
            <h1 className="heading-h1 text-white">
              Designing an online presence for Charles & Keith with an
              end-to-end Magento solution
            </h1>
          </div>
        </div>
      </div>
      <div className="container-section mat-100">
        <div className="grid grid-cols-12  gap-4">
          <div className="lg:col-span-7 md:col-span-12 sm:col-span-12">
            <div className="border-line"></div>
            <div className="element-container ">
              <h3 className="heading-h3 text-white">
                Charles & Keith empowers women around the world to express
                themselves freely through fashion with Ranosys commerce
                experts."
              </h3>
              <p className="para mt-6">
                Charles & Keith is a Singaporean fast-fashion retailer of
                high-quality, stylish footwear and accessories including bags,
                eyewear and costume jewellery cate#525CEB to modern women. It
                was founded back in 1996 by two brothers named Charles Wong and
                Keith Wong. Currently the brand has a global presence across
                Asia, the Middle East, Europe, Latin America and Africa with
                more than 600 physical stores. It also owns the brand Pedro
                which embodies modern luxury and style with a line of footwear
                and accessories for men and women.
              </p>
              <p className="para mt-4">
                In addition to brick-and-mortar, Charles & Keith allows
                customers to purchase its products online.It was the first
                company in Singapore to set up an eCommerce website back in 2004
                and boost the expansion of its business by allowing the company
                to reach customers which they could not reach through physical
                stores.
              </p>
            </div>
          </div>
          {/* <!-- ... --> */}
          <div className="lg:col-span-1 right-full-border sm:flex-none"></div>
          <div className="lg:col-span-4  md:col-span-12 sm:col-span-12">
            <div className="element-container  flex columns-lg h-[100%] justify-center sm:flex-col">
              <p className="para">
                <b>Website :</b> www.charleskeith.com
              </p>
              <p className="para sm:mt-4">
                <b>Industry :</b> Retail & eCommerce, Fashion & Apparels
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-section mat-100">
        <div className="grid grid-cols-12  gap-6">
          <div className="lg:col-span-6  md:col-span-12 sm:col-span-12">
            <div className="element-container ">
              <div className="success-stories-middle-section">
                <div className="img-box-1">
                  <img src={Img1} alt="" />
                </div>
                <div className="img-box-2">
                  <img src={Img2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-5  md:col-span-12 sm:col-span-12">
            <div className="element-container ">
              <div className="success-stories-middle-section">
                <h6 className="heading-h6">
                  <b>CHALLENGE</b>
                </h6>
                <div className="border-line" style={{ height: "1px" }}></div>
                <p className="para">
                  The online presence of Charles & Keith was a significant
                  milestone for the company which resulted in an immense
                  expansion. In order to cater to different countries and offer
                  a localised experience focused on efficient inventory
                  management, Charles & Keith were looking for a Magento partner
                  to fulfill its requirements by leveraging the full power of
                  Magento.
                </p>
                <h6 className="heading-h6 mt-3">
                  <b>THE GOAL</b>
                </h6>
                <div className="border-line" style={{ height: "1px" }}></div>
                <p className="para">
                  Charles & Keith's main goal was to ensure that the online
                  store is updated as per the latest commerce trends thereby
                  customers would have superior shopping experiences. Hence,
                  Charles & Keith wanted a Magento Partner who provides high
                  quality system maintenance support as well as a partner who
                  can recommend strategies to improve conversions & boost online
                  revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fix-bg-section servicess-bg-fixed mat-100">
        <div className="center-content-details">
          <h4 className="heading-h4">Heading</h4>
          <p className="para">content</p>
        </div>
      </div>

      {/* Our Custom eCommerce Development Services */}
      <div className="dark-gray-section ">
        <div className="container-section">
          <div className="highlight-section">
            <div className="border-line "></div>
            <h3 className="heading-h3 text-white">Highlights </h3>

            <ul>
              <li>
                <div className="our-essence-box industries-details-box">
                  <p className="white-color">
                    Ranosys provides continuous support on the Magento
                    Application side and AWS Infra ensuring the site is scalable
                    to handle high traffic during promotional campaigns.
                  </p>
                </div>
              </li>
              <li>
                <div className="our-essence-box industries-details-box">
                  <p className="white-color">
                    Ranosys provides continuous support on the Magento
                    Application side and AWS Infra ensuring the site is scalable
                    to handle high traffic during promotional campaigns.
                  </p>
                </div>
              </li>
              <li>
                <div className="our-essence-box industries-details-box">
                  <p className="white-color">
                    Ranosys provides continuous support on the Magento
                    Application side and AWS Infra ensuring the site is scalable
                    to handle high traffic during promotional campaigns.
                  </p>
                </div>
              </li>
              <li>
                <div className="our-essence-box industries-details-box">
                  <p className="white-color">
                    Ranosys provides continuous support on the Magento
                    Application side and AWS Infra ensuring the site is scalable
                    to handle high traffic during promotional campaigns.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <OurSuccessStories />
    </>
  );
};

export default SuccessStoriesDetails;
