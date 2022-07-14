import React from "react";
import Layout from "../components/Layout";
// import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import WorkshopOne from "../components/WorkshopOne";
import VideoTwo from "../components/VideoTwo";
import WorkshopCountdown from "../components/WorkshopCountdown";
import WorkshopCatOne from "../components/WorkshopCatOne";
import CallToActionThree from "../components/CallToActionThree";
import BrandsTwo from "../components/BrandsTwo";
import BlogTwo from "../components/BlogTwo";
import CallToActionFour from "../components/CallToActionFour";
import SubscribeOne from "../components/SubscribeOne";

const HomePage = () => (
  <Layout pageTitle="Flutter Devcamp - Flutter Learning">    
    <NavOne />
    <SliderOne />
    <AboutTwo />
    <WorkshopOne />
    <VideoTwo />
    <WorkshopCountdown />
    <WorkshopCatOne />
    <CallToActionThree />
    <BrandsTwo />
    <BlogTwo />
    <CallToActionFour />
    <SubscribeOne />
    <Footer />
  </Layout>
);

export default HomePage;
