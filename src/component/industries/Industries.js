import React from 'react'
import Ecommerce from "../../assets/ecommerce.webp"
import { IoIosArrowRoundForward } from "react-icons/io";
import "./industries.css"
import { IndustriesData } from './IndustriesData';
import { useNavigate } from 'react-router-dom';
import OurSuccessStories from '../home/OurSuccessStories';
import MetaData from '../../layout/MetaData';
import img2 from '../../assets/1714720500199_arioaq_2_0.jpg';
const Industries = () => {
    const navigate = useNavigate()
    return (
        <>
            <MetaData titles="Maxify industries" />
            {/* serive banner */}
            <div className="element-banner industry-banner">
                <div className="container-section">
                    <div className="element-banner-content">
                        <h1 className="heading-h1 text-white">Explore the Dynamic World of Industries with Maxify Web Solutions</h1>
                        <p className="para">Revolutionizing Industries through Innovative Solutions</p>
                    </div>
                </div>
            </div>


            {/* service container */}
            <div className="container-section mat-100 mab-100">
                <div className="border-line"></div>
                <h3 className="heading-h3">Delivering Digital Excellence Across Industries</h3>
                <p className="para">We employ our expertise, capabilities and insights into curating world-class digital solutions for various industries across the globe.</p>
                <div className="grid grid-cols-12  gap-4 mat-50">
                    {IndustriesData.map((item, i) => (

                        <div className='industry-box lg:col-span-6 md:col-span-6 sm:col-span-12' key={i} >
                            <div className="single-industries-box" onClick={() => navigate(item.url)}>
                                <div className="img">
                                    <img src={item.industriesImg} alt="" />
                                </div>
                                <div className="content">
                                    <h4 className="heading-h4 ">{item.industriesHeading}
                                    </h4>
                                    <p className="para ">{item.industriesText}</p>
                                    <button class=""><IoIosArrowRoundForward /> </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <OurSuccessStories />

        </>
    )
}

export default Industries
