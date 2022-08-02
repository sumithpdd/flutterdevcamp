import React from 'react';
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import NavThree from "../components/NavThree";
import SliderOne from "../components/SliderOne";
import WorkshopCatThree from "../components/WorkshopCatThree";
import CallToActionOne from "../components/CallToActionOne";
import TeamTab from "../components/TeamTab";
import WorkshopThree from "../components/WorkshopThree";
import CallToActionSix from "../components/CallToActionSix";
import TestimonialOne from "../components/TestimonialOne";
import VideoThree from "../components/VideoThree";
import BrandsTwo from "../components/BrandsTwo";
import CallToActionFive from "../components/CallToActionFive";


const HomePageThree = () => {
    return (
        <Layout pageTitle="Flutter DevCamp | Home 3">
            <NavThree />
            <SliderOne />
            <WorkshopCatThree />
            <CallToActionOne />
            <TeamTab />
            <WorkshopThree />
            <CallToActionSix />
            <TestimonialOne />
            <VideoThree />
            <BrandsTwo />
            <CallToActionFive />
            <Footer />
        </Layout>
    );
};

export default HomePageThree;
