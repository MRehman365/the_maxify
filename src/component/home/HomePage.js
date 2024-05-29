import React from 'react'
import Slider from './Slider'
import "./home.css"
import Welcome from './Welcome'
import WhyChooseUs from './WhyChooseUs'
import BlogsNews from './BlogsNews'
import HomeService from './HomeService'
import OurSuccessStories from './OurSuccessStories'
import WhatsAppButton from '../WhatsAppButton'
const HomePage = () => {
    return (
        <>
            <Slider />
            <Welcome />
            <WhyChooseUs />
            <OurSuccessStories />
            <HomeService />
            <BlogsNews />
           
        </>
    )
}

export default HomePage
