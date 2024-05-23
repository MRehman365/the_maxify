import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Slider1 from "../../assets/slider1.jpg";
import Vedio from "../../assets/videos.mp4";
// import requi#525CEB modules
import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className="home-slider-section">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="home-slider-container">
              <div className="home-slider-img1">
                {/* <img src={Slider1} alt="" /> */}
                <video autoPlay muted loop>
                  <source
                    className="brightness-50"
                    src={Vedio}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* <div className="slider-overlay">

                            </div> */}
              <div className="home-slider-content">
                <h1 className="heading-h1"> We are Maxify</h1>
                <p className="para ">
                  We provide cutting-edge digital services to elevate your
                  business.
                </p>
                {/* <button class="custom-btn btn-16">Read More</button> */}
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}
