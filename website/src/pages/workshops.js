import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Workshops from "../components/Workshops";

const WorkshopsPage = () => {
    return (
        <Layout pageTitle="Flutter DevCamp | Workshops">
            <NavOne />
            <PageHeader title="Workshops" />
            <Workshops />
            <Footer />
        </Layout>
    );
};

export default WorkshopsPage;
