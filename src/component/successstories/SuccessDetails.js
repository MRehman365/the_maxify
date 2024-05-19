import React, { useEffect } from 'react'
import "../services/service.css"

import { IoIosArrowRoundForward } from "react-icons/io";
import OurSuccessStories from '../home/OurSuccessStories';
import MetaData from '../../layout/MetaData';
// import img2 from '../../assets/1715154300452_bjeoh5_2_0.jpg'

const SuccessDetails = ({ title,
    name,
    description,
    description2,
    description3,
    description4,
    description5,
    headingp1,
    headingp2,
    headingp3,
    img,
    img2,
    img3,
    img22,
    title2,
    title3,
    text,
    logo1,
    logo2,
    logo3,
    logo4,
    challenge,
    challenge1,
    challenge2,
    challenge3,
    challenge4,
    goal,
    highlight1,
    highlight2,
    highlight3,
    IndustriesSubData,
}) => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    })


    return (
        <>
            <MetaData titles={`Maxify ${name}`} />
            <div className="element-banner " ><img className="banner" src={img} alt="jpg" />
                <div className="container-section">
                    <div className="element-banner-content">
                        <h1 className="heading-h1 text-white"> {title2} </h1>
                        <p className="para">{text}</p>
                    </div>
                </div>
            </div>
            <div className="container-section mat-100">
                <div className="grid grid-cols-12  gap-4">
                    <div className='lg:col-span-7 md:col-span-12 sm:col-span-12'>
                        <div className="border-line"></div>
                        <h2 className='para'>{title3}</h2>
                        <div className="element-container ">
                            {/* <h3 className="heading-h3 text-white">Charles & Keith empowers women around the world to express themselves freely through fashion with Ranosys commerce experts."</h3> */}
                            <p className="para mt-6">{description}</p>
                            <p className="para mt-4">{description2}</p>

                        </div>

                    </div>
                    {/* <!-- ... --> */}
                    <div className="lg:col-span-1 right-full-border sm:flex-none"></div>
                    <div className='lg:col-span-4  md:col-span-12 sm:col-span-12'>
                        <div className="element-container  flex columns-lg h-[100%] justify-center sm:flex-col">
                            <p className="para"><b>Website :</b> www.themaxify.com</p>
                            <p className="para sm:mt-4"><b>Industry :</b> Retail & eCommerce, Fashion & Apparels</p>
                        </div>

                    </div>
                </div>
            </div>


            {/* Success Goal  */}

            <div className="container-section mat-100">


                <div className="grid grid-cols-12  gap-6">
                    <div className='lg:col-span-6  md:col-span-12 sm:col-span-12'>
                        <div className="element-container ">
                            <div className="success-stories-middle-section">
                                <div className="img-box-1">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="img-box-2">
                                    <img src={img3} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1"></div>
                    <div className='lg:col-span-5  md:col-span-12 sm:col-span-12'>
                        <div className="element-container ">
                            <div className="success-stories-middle-section">
                                <h6 className="heading-h6"><b>CHALLENGE</b></h6>
                                <div className="border-line" style={{ height: "1px" }}></div>
                                <p className="para">{challenge}</p>
                                <li className="para">{challenge1}</li>
                                <li className="para">{challenge2}</li>
                                <li className="para">{challenge3}</li>
                                <h6 className="heading-h6 mt-3"><b>THE GOAL</b></h6>
                                <div className="border-line" style={{ height: "1px" }}></div>
                                <p className="para">{goal}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className='mt-3 result'>
                <h2 className='heading-h2 para'>The Result</h2>
                <div className='content-result'>
                <li className='para'>{headingp1}</li>
                <p className='para'>{description3}</p>
                <li className='para'>{headingp2}</li>
                <p className='para'>{description4}</p>
                <li className='para'>{headingp3}</li>
                <p className='para'>{description5}</p>
                </div>
            </div>

           {/*  */}
                <div className='highlight mt-2'>
                    <img src={img22} alt='' />
                    <div className='highlight-data para'>
                        <h2>Highlight</h2>
                        <li>{highlight1}</li>
                        <li>{highlight2} </li>
                        <li>{highlight3}</li>
                    </div>

                </div>

                {/* technologies */}
                <div className='technologies mt-1 para'>
                    <div className='tec-inner'>
                    <h2 className='text-center mt-4'>Technology Stack</h2>
                    <div className='technologies-data'>
                        <p>Frameworks: </p><div className='tec-img'><img src={logo1} alt="" /><img src={logo2} alt="" /></div>
                    </div>
                    <div className='technologies-data'>
                        <p>Languages:</p><div className='tec-img2'><img src={logo3} alt="" /><img src={logo4} alt="" /></div>
                    </div>
                    </div>
                </div>

           

            <OurSuccessStories />

        </>
    )
}

export default SuccessDetails
