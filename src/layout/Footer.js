import React from "react";
import "./footer.css";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiSolidCheckbox } from "react-icons/bi";
import { PiMapPinThin } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/d-logo.png";
import { FaCheckDouble } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="container-section mat-100">
        <div className="footer-contact-section">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-6  md:col-span-6 sm:col-span-12">
              <h6>CONTACT US</h6>
              <h3 className="heading-h3">Time to break the ice?</h3>
              <p className="para">We would love to hear from you.</p>
              <p className="mt-5">
                Please fill the form or send us an email at
              </p>
              <p
                className="para para-#525CEB mt-7 "
                style={{ fontSize: "20px" }}
              >
                <a className="text-[#ffac05]" href="mailto:sales@maxifyweb.com">
                  sales@maxifyweb.com
                </a>
              </p>
            </div>
            <div className="lg:col-span-6  md:col-span-6 sm:col-span-12 sm:mt-5">
              <div className="footer-contact-form">
                <div className="two">
                  <input type="text" placeholder="First Name" name="" id="" />
                  <input type="text" placeholder="Last Name" name="" id="" />
                </div>
                <div className="two">
                  <input
                    type="text"
                    placeholder="Company Email"
                    name=""
                    id=""
                  />
                  <input
                    type="text"
                    placeholder="Contact Number"
                    name=""
                    id=""
                  />
                </div>
                <input type="text" placeholder="Company" name="" id="" />
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  cols="30"
                  rows="5"
                ></textarea>
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="">
        {/* <div className="" id='stars'></div>
                <div className="" id='stars2'></div>
                <div className="" id='stars3'></div> */}
        <div className="container-section">
          <div className="grid grid-cols-12">
            {/* <div className="lg:col-span-3  md:col-span-6 sm:col-span-12">
                            <div className="footer-content">
                                <h3 className="heading-h3">Maxify Web Solution</h3>
                                <p className="para text-white">
                                Our team of experienced professionals is dedicated to delivering high-quality services that drive success. Partner with Maxify to transform your vision into reality and achieve sustainable growth.
                                </p>

                            </div>
                        </div> */}
            <div className="lg:col-span-3  md:col-span-6 sm:col-span-12">
              <div className="footer-content">
                <h2 className="heading-h5">Services</h2>
                <ul className="footer-ul">
                  <li>
                    <i>
                      <FaCheckDouble />
                    </i>{" "}
                    App Development
                  </li>
                  <li>
                    <i>
                      <FaCheckDouble />
                    </i>{" "}
                    Web Development
                  </li>
                  <li>
                    <i>
                      <FaCheckDouble />
                    </i>{" "}
                    Digital Marketing
                  </li>
                  <li>
                    <i>
                      <FaCheckDouble />
                    </i>{" "}
                    Graphic Designing
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3  md:col-span-6 sm:col-span-12">
              <div className="footer-content">
                <h2 className="heading-h5">Explore</h2>
                <ul className="footer-ul">
                  <li>
                    <i>
                      <FaCheckDouble />
                    </i>{" "}
                    About{" "}
                  </li>
                  <li>
                    <i>
                      <FaCheckDouble />
                    </i>{" "}
                    Blog{" "}
                  </li>
                  <li>
                    <i>
                      <FaCheckDouble />
                    </i>{" "}
                    Projects
                  </li>
                  <li>
                    <i>
                      <FaCheckDouble />
                    </i>{" "}
                    Contact
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3  md:col-span-6 sm:col-span-12">
              <div className="footer-content">
                <h2 className="heading-h5">Address</h2>
                <ul className="footer-ul">
                  <li>
                    <span>
                      <PiMapPinThin />
                    </span>
                    Office No.-301, A-74, Sec-15, Noida 201301
                  </li>
                  <li>
                    <span>
                      <FiPhoneCall />
                    </span>
                    <a href="tel:+918130245100">+ 91 81302-45100</a>
                  </li>
                  <li>
                    <span>
                      <MdOutlineMailOutline />
                    </span>
                    <a href="mailto:info@maxifyweb.com">info@maxifyweb.com</a>
                  </li>
                </ul>

                <div className="social-media-icon ">
                  <span>
                    <Link to="" target="_blank">
                      <FaFacebookF />
                    </Link>
                  </span>
                  <span>
                    <Link to="" target="_blank">
                      <FaPinterestP />
                    </Link>
                  </span>
                  <span>
                    <Link to="" target="_blank">
                      <FaTwitter />
                    </Link>
                  </span>
                  <span>
                    <Link to="" target="_blank">
                      <IoLogoInstagram />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="footer-copyright mt-100">
            <div>
              <p className="para">© 2024 Maxify Web. All rights reserved.</p>
            </div>
            <div>
              <Link>Terms & Conditions</Link>
              <span className="mx-2"> |</span>
              <Link> Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
