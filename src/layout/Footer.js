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
      <div className="container-section mat-50">
        <div className="footer-contact-section py-10 px-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="lg:col-span-6  md:col-span-6 sm:col-span-12">
              {/* <h3 className="heading-h3">Time to break the ice?</h3>
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
              </p> */}
              <div className="map lg:w-full sm:w-[60%] h-[300px] border-[1px] mt-10">
                <div className="overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5542845965706!2d77.31402716000127!3d28.583144025590354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45917b8e8a5%3A0xac53cd47e64bfd7c!2sD%20Block%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1716119557655!5m2!1sen!2sin"
                    width={600}
                    height={300}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="contenct mt-10">
                <h5 className="text-lg font-[600]">Company Address</h5>
                <div className="mt-5 ml-5">
                  <ul className="text-base text-gray-600">
                    <li>
                      <strong>The Maxify web solution pvt. ltd</strong>
                      <br />
                      The Vista Centre
                      <br />
                      50 Salisbury Road
                      <br />
                      Hounslow, England
                      <br />
                      TW4 6JQ
                      <br />
                      Telephone:<a href="tel:+442084322870">+442084322870</a>
                      <br />
                      E-mail:{" "}
                      <a href="mailto:info@mindtreeitsolutions.com">
                        info@mindtreeitsolutions.com
                      </a>
                      <a href="mailto:mail@companyname.com">
                        <br />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6  md:col-span-6 sm:col-span-12">
              <div className="mb-5">
                <h3 className="heading-h3">Time to break the ice?</h3>
                <p className="para">We would love to hear from you.</p>
              </div>
              <div className="footer-contact-form">
                <div className="">
                  <input
                    className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                    type="text"
                    placeholder="First Name"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <input
                    className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                    type="text"
                    placeholder="Last Name"
                    name=""
                    id=""
                  />
                </div>
                <div className=" w-full">
                  <input
                    className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                    type="text"
                    placeholder="Contact Number"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <input
                    className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                    type="text"
                    placeholder="Company Email"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <input
                    className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                    type="text"
                    placeholder="Company"
                    name=""
                    id=""
                  />
                </div>

                <textarea
                  className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
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
