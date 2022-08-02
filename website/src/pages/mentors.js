import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Mentor from "../components/Mentor";
import CallToActionTwo from "../components/CallToActionTwo";

const MentorPage = () => {
    return (
        <Layout pageTitle="Flutter DevCamp | Mentor">
            <NavOne />
            <PageHeader title="Mentor" />
            <Mentor />
            <CallToActionTwo />
            <Footer />
        </Layout>
    );
};

export default MentorPage;
