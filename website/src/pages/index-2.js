import React from 'react';
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import SliderTwo from "../components/SliderTwo";
import Footer from "../components/Footer";
import WorkshopCatTwo from "../components/WorkshopCatTwo";
import AboutOne from "../components/AboutOne";
import WorkshopTwo from "../components/WorkshopTwo";
import TeamOne from "../components/TeamOne";
import Pricing from "../components/Pricing";
import MeetingOne from "../components/MeetingOne";
import CallToActionTwo from "../components/CallToActionTwo";
import BlogThree from "../components/BlogThree";

const HomePageTwo = () => {
    return (
        <Layout pageTitle="Flutter DevCamp | Home 2">
            <NavTwo />
            <SliderTwo />
            <WorkshopCatTwo />
            <AboutOne />
            <WorkshopTwo />
            <TeamOne />
            <Pricing />
            <MeetingOne />
            <CallToActionTwo />
            <BlogThree />
            <Footer />
        </Layout>
    );
};

export default HomePageTwo;
