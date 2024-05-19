import React, { Fragment } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './layout/Navbar';
import HomePage from './component/home/HomePage';
import "./index.css"
import Footer from './layout/Footer';
import "./responsive.css"
import { ServiceData } from './component/services/ServiceData';
import AboutCompany from './component/about/AboutCompany';
import NewsEvent from './component/about/NewsEvent';
import LeadershipTeam from './component/about/LeadershipTeam';
import ServicesDetails from './component/services/ServicesDetails';
import Service from './component/services/Service';
import Industries from './component/industries/Industries';
import IndustriesDetails from './component/industries/IndustriesDetails';
import { IndustriesData } from './component/industries/IndustriesData';
import SuccessDetails from './component/successstories/SuccessDetails';
import { SuccessData } from './component/successstories/SuccessData';
import Contact from './component/contact/Contact';
import SuccessStoriesDetails from './component/successstories/SuccessStoriesDetails';
import Career from './component/career/Career';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services/' element={<Service />} />

        {ServiceData.map((item, i) => (
          <Fragment key={i}>
            <Route path={item.url} element={<ServicesDetails
              img={item.img}
              img2={item.img2}
              name={item.name}
              title={item.title}
              title2={item.title2}
              text={item.text}
              description={item.description}
              description2={item.description2}
              technologyTitle={item.technologyTitle}
              technologydescription={item.technologydescription}
              technologyData={item.technologyData}
            />} />
          </Fragment>
        ))}

        <Route path='/industries/' element={<Industries />} />
        {IndustriesData.map((item, i) => (
          <Fragment key={i}>
            <Route path={item.url} element={<IndustriesDetails
              name={item.name}
              img={item.img}
              img2={item.img2}
              title={item.title}
              title2={item.title2}
              text={item.text}
              description1={item.description1}
              description2={item.description2}
              IndustriesSubData={item.industriesSubData}

            />} />
          </Fragment>
        ))}


        <Route path='/success/' element={<SuccessStoriesDetails />} />
        {SuccessData.map((item, i) => (
          <Fragment key={i}>
            <Route path={item.url} element={<SuccessDetails
              img={item.img}
              img2={item.img2}
              img3={item.img3}
              logo1={item.logo1}
              logo2={item.logo2}
              logo3={item.logo3}
              logo4={item.logo4}
              name={item.name}
              title={item.title}
              title2={item.title2}
              title3={item.title3}
              text={item.text}
              headingp1={item.headingp1}
              headingp2={item.headingp2}
              headingp3={item.headingp3}
              description={item.description}
              description2={item.description2}
              description3={item.description3}
              description4={item.description4}
              description5={item.description5}
              technologyTitle={item.technologyTitle}
              technologydescription={item.technologydescription}
              technologyData={item.technologyData}
              IndustriesSubData={item.industriesSubData}
            />} />
          </Fragment>
        ))}



        <Route path='/about-company/' element={<AboutCompany />} />
        <Route path='/news-event/' element={<NewsEvent />} />
        <Route path='/leadership-team/' element={<LeadershipTeam />} />
        <Route path='/contact-us/' element={<Contact />} />
        <Route path='/career/' element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
