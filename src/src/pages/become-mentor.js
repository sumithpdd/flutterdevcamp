import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomeMentor from "../components/BecomeMentor";
import TeamOne from "../components/TeamOne";


const GalleryPage = () => {
    return (
        <Layout pageTitle="Flutter DevCamp | Become Mentor">
            <NavOne />
            <PageHeader title="Become Mentor" />
            <BecomeMentor />
            <TeamOne />
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
