import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MetaData from "../../layout/MetaData";
const LeadershipTeam = () => {
  return (
    <>
      <MetaData titles={`Maxify Industries Leadership Team`} />
      {/* banner */}
      <div className="element-banner lg:pt-[15%] lg:pb-[15%] sm:pt-[23%] sm:pb-[7%]  about-company-banner">
        <img className="banner" src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462462/myCloud/leadership_image_uoi3xx.png" alt="jpg" />
        <div className="container-section ">
          <div className="element-banner-content lg:w-[60%]">
            <h1 className="text-heading- sm:text-[24px] font-[600] sm:leading-[32px] lg:leading-[50px] lg:text-[40px]">
              Powering Great Ideas, Driving Excellence Through Our
              Solutions
            </h1>
          </div>
        </div>
      </div>

      <div className="container-section-2 mat-50">
        <div className="grid grid-cols-12  gap-5">
          <div className="lg:col-span-8 xl:col-span-6 sm:col-span-12">
            <div className="element-container">
              <div className="border-line"></div>
              <h3 className="heading-h3 ">Meet our team</h3>
              <p className="par text-[1.1rem] text-justify mt-6">
                Our Maxify leaders embody a rich tapestry of experience,
                expertise and vision that propels us to move forward and bring
                unwavering dedication and zeal to pursue our dreams bringing
                excellence to the work we deliver. Each member of the team
                brings set of unique skills creating room for more ideas and
                create a dynamic environment that fosters innovation and growth.
                We stand together to push walls of our mind and go beyond to
                explore new things in this digital world, delivering solutions
                that empowers each one of us and thrive to evolve in this
                ever-changing landscape. They are a source of inspiration,
                dedication, creation bringing all of us together and work in one
                way which brings us closer to each other and to our individual
                goals.
              </p>
            </div>
          </div>
          {/* <!-- ... --> */}
<<<<<<< HEAD
          <div className="lg:col-span-4 xl:col-span-6 sm:col-span-12 lg:mt-10 sm:mt-0 lg:ml-20">
            <div className="element-container sm:w-full lg:w-[80%] xl:h-[70%] 2xl:h-[70%]">
              {/* <div className="img-box about-leadership-main"> */}
                <img className="w-full xl:h-[100%] 2xl:h-[100%]" src={AboutCompanyImg} alt="" />
              {/* </div> */}
=======
          <div className="lg:col-span-5 xl:col-span-6 sm:col-span-12 lg:mt-20 sm:mt-0">
            <div className="element-container lg:w-[100%] xl:h-[100%] 2xl:h-[100%] lg:overflow-hidden">
              <div className="img-box about-leadership-main">
                <img className="w-full" src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462514/myCloud/welcome-img_1_w9k7l7.jpg" alt="" />
              </div>
>>>>>>> 610011b0131380d1cc086e33259ece257576fa0f
            </div>
          </div>
        </div>
      </div>

      <div className="container-section-2 mat-25">
        <h4 className="text-heading-h4 left-line">Management Team</h4>
        <div className="grid grid-cols-12  gap-4 mat-50">
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/profile_cj6crw.jpg" alt="" className="profiles-img" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462456/myCloud/india-logo_uaybm2.jpg" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/profile_cj6crw.jpg" alt="" className="profiles-img" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462456/myCloud/india-logo_uaybm2.jpg" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/profile_cj6crw.jpg" alt="" className="profiles-img" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462456/myCloud/india-logo_uaybm2.jpg" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/profile_cj6crw.jpg" alt="" className="profiles-img" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462456/myCloud/india-logo_uaybm2.jpg" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/profile_cj6crw.jpg" alt="" className="profiles-img" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462456/myCloud/india-logo_uaybm2.jpg" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/profile_cj6crw.jpg" alt="" className="profiles-img" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462456/myCloud/india-logo_uaybm2.jpg" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="leadership-box">
              <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462486/myCloud/profile_cj6crw.jpg" alt="" className="profiles-img" />
              <div className="content">
                <p className="para">
                  <b>Rameshwar Vyas</b>
                </p>
                <p className="para">Chief Executive Officer</p>
                <div className="leader-loaction">
                  <img src="https://res.cloudinary.com/djkkjx9ry/image/upload/v1716462456/myCloud/india-logo_uaybm2.jpg" alt="" />
                  <Link href="">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadershipTeam;
