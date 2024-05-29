import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Slider1 from "../../assets/slider1.jpg";
// import Vedio from "../../assets/videos.mp4";
// import required modules
import { Navigation } from "swiper/modules";

export default function Slider() {
  const homeVideo =
    "https://res.cloudinary.com/djkkjx9ry/video/upload/v1716566117/myCloud/videos_mudjus.mp4";
  const homeBanner =
    "https://res.cloudinary.com/djkkjx9ry/image/upload/v1716809151/myCloud/home_page_main_banner_x1j1ga.png";
  const [video, setVideo] = useState(homeBanner);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideo(homeVideo);
    }, 10000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="home-slider-section">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="home-slider-container">
              <div className="home-slider-img1">
                {video === homeBanner ? (
                  <img src={homeBanner} alt="Banner" />
                ) : (
                  <video autoPlay muted loop>
                    <source
                      className="brightness-50"
                      src={homeVideo}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="home-slider-content sm:mt-14">
                <h1 className="heading-h1"> We are Maxify</h1>
                <p className="para sm:hidden md:block ">
                  We provide cutting-edge digital services to elevate your
                  business.
                </p>
                {/* <button class="custom-btn btn-16">Read More</button> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
