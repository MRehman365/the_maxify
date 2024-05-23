import React from "react";
import "./footer.css";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BiSolidCheckbox } from "react-icons/bi";
import { PiMapPinThin } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaCheckDouble } from "react-icons/fa6";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-section mat-50">
        <div className="footer-contact-section sm:py-20 lg:py-10 lg:px-20 sm:px-5">
          <div className="grid grid-cols-12 gap-[5%]">
            <div className="lg:col-span-6  md:col-span-6 sm:col-span-12">
              <div className="map lg:w-full sm:w-[100%] h-[300px] lg:mt-10 sm:mt-5">
                <div className="overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.94898951084804!2d77.31535415943979!3d28.58201447114941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8cb2844875948653%3A0x31a70beb6225a223!2sMaxify%20Web%20Solutions%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1716287100411!5m2!1sen!2sin"
                    width="100%"
                    height={350}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="contenct mt-14">
                <h5 className="text-lg font-[600]">Company Address</h5>
                <div className="mt-5 ml-5">
                  <ul className="text-base text-gray-600">
                    <li>
                      <strong>Maxify web solution pvt. ltd</strong>
                      <br />
                      The Viste Centre
                      <br />
                      Office No - F-02
                      <br />
                      Block- D, Sector 2, Red FM Road
                      <br />
                      Noida, Uttar Pradesh 201301
                      <br />
                      Telephone:<a href="tel:+91">+442084322870</a>
                      <br />
                      E-mail:
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
                <li onClick={() => navigate('/application-development/')}>
                    <i>
                      {/* <FaCheckDouble /> */}
                    </i>{" "}
                    App Development
                  </li>
                  <li onClick={() => navigate('/web-development/')}>
                    <i>
                      {/* <FaCheckDouble /> */}
                    </i>{" "}
                    Web Development
                  </li>
                  <li onClick={() => navigate('/digital-marketing/')}>
                    <i>
                      {/* <FaCheckDouble /> */}
                    </i>{" "}
                    Digital Marketing
                  </li>
                  {/* <li>
                    <i>
                      <FaCheckDouble />
                    </i>{" "}
                    Graphic Designing
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3  md:col-span-6 sm:col-span-12">
              <div className="footer-content">
                <h2 className="heading-h5">Explore</h2>
                <ul className="footer-ul">
                  <li onClick={() => navigate('/about-company/')}>
                    <i >
                      {/* <FaCheckDouble /> */}
                    </i>{" "}
                    About{" "}
                  </li>
                  {/* <li>
                    <i>
                      <FaCheckDouble />
                    </i>{" "}
                    Blog{" "}
                  </li> */}
                  <li onClick={() => navigate('/success/')}>
                    <i>
                      {/* <FaCheckDouble /> */}
                    </i>{" "}
                    Projects
                  </li>
                  <li onClick={() => navigate('/contact-us')}>
                    <i>
                      {/* <FaCheckDouble /> */}
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
                    <FaXTwitter />
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
