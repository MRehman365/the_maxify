import React from "react";
import { Link } from "react-router-dom";
import thumb from "../assets/social.png"
import { IoMdClose } from "react-icons/io";

const ThankYouPage = ({showPopup, setShowPopup}) => {
  return (
    <div className="bg-white">
      <div className="flex justify-end">
      <span className="text-2xl cursor-pointer pr-5 pt-5" onClick={()=>setShowPopup(!showPopup)}><IoMdClose /></span>
      </div>
      <div className="content bg-white">
        <div className="wrapper-1 lg:w-full lg:h-[100vh] sm:w-[90%] sm:mx-auto sm:h-auto">
       <div className="flex justify-center ">
        <img className="w-14 h-14 bg-white p-1 rounded-full" src={thumb} alt="thumb" />
       </div>
          <div className="wrapper-2 ">
            <h1 className="heading-1 lg:text-[4rem] sm:text-[2rem]">Thank you !</h1>
            <p className="lg:text-base sm:text-sm">Thanks for showing your valuable interest in our services...</p>
            <p className="lg:text-base sm:text-sm">you should receive a confirmation email soon ❤❤✔</p>
            <Link to="/">
              <button className="go-home" onClick={()=>setShowPopup(!showPopup)}>go home</button>
            </Link>
          </div>
          {/* <div className="footer-like">
            <p>
              Email not received?
              <Link to="/">Click here to send again</Link>
            </p>
          </div> */}
        </div>
      </div>
      {/* <link
        href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro"
        rel="stylesheet"
      /> */}
    </div>
  );
};

export default ThankYouPage;
