import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import WorkshopDetails from "../components/WorkshopDetails";

const WorkshopDetailPage = () => {
    return (
        <Layout pageTitle="Flutter DevCamp | Workshop Details">
            <NavOne />
            <PageHeader title="Workshop Details" />
            <WorkshopDetails />
            <Footer />
        </Layout>
    );
};

export default WorkshopDetailPage;
