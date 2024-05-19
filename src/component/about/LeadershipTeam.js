import React from 'react'
import AboutCompanyImg from "../../assets/welcome-img.jpg"
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import IndiaLogo from '../../assets/india-logo.jpg'
import Profile from '../../assets/profile.jfif'
import MetaData from '../../layout/MetaData';
import img2 from '../../assets/leadership image.jpg'
const LeadershipTeam = () => {
    return (
        <>
            <MetaData titles={`Maxify Industries Leadership Team`} />
            {/* banner */}
            <div className="element-banner about-company-banner"><img className="banner" src={img2} alt="jpg" />
                <div className="container-section">
                    <div className="element-banner-content">
                        <h1 className="text-heading-h1">Powering Great Ideas, Driving Excellence Through Our Solutions</h1>
                    </div>
                </div>
            </div>


            <div className="container-section-2 mat-100">
                <div className="grid grid-cols-12  gap-4">
                    <div className='lg:col-span-6 md:col-span-12 sm:col-span-12'>
                        <div className="element-container">
                            <div className="border-line"></div>
                            <h3 className="heading-h3 ">Meet our team</h3>
                            <p className="para mt-6">Our Maxify leaders embody a rich tapestry of experience, expertise and vision that propels us to move forward and bring unwavering dedication and zeal to pursue our dreams bringing excellence to the work we deliver. Each member of the team brings set of unique skills creating room for more ideas and create a dynamic environment that fosters innovation and growth. We stand together to push walls of our mind and go beyond to explore new things in this digital world, delivering solutions that empowers each one of us and thrive to evolve in this ever-changing landscape. They are a source of inspiration, dedication, creation bringing all of us together and work in one way which brings us closer to each other and to our individual goals.</p>

                        </div>
                    </div>
                    {/* <!-- ... --> */}
                    <div className='lg:col-span-6 md:col-span-12 sm:col-span-12'>
                        <div className="element-container">
                            <div className="img-box about-leadership-main">
                                <img src={AboutCompanyImg} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-section-2 mat-100">
                <h4 className="text-heading-h4 left-line">Management Team</h4>
                <div className="grid grid-cols-12  gap-4 mat-50">
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeadershipTeam
