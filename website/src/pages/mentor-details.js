import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import MentorDetails from "../components/MentorDetails";

const MentorDetailsPage = () => {
    return (
        <Layout pageTitle="Flutter DevCamp | Mentor Details">
            <NavOne />
            <PageHeader title="Mentor Details" />
            <MentorDetails />
            <Footer />
        </Layout>
    );
};

export default MentorDetailsPage;
