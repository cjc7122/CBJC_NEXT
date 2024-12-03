import React from 'react';
import './Service-Home.css';
import '../app/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Cain, Bourret, Jarry & Cressman LLC</title>
        <meta
          name="description"
          content="Explore our full range of professional services, including auditing, tax planning, advisory, payroll, frequently asked questions, and industries served."
        />
        <link rel="canonical" href="https://cbjv.com/Services-Home" />
      </Helmet>
      <div id="service1" className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Learn More About Our Services</h1>
            <hr />
          </div>
        </div>
        <div className="button_container">
          <div className="button_grid">
            <Link href="/services/ACCOUNTING-AUDIT" className="service_button">
              AUDIT
            </Link>
            <Link href="/services/TAX-PLANNING" className="service_button">
              TAX
            </Link>
            <Link href="/services/BUIS-OPS" className="service_button">
              ADVISORY
            </Link>
            <Link href="/services/PAYROLL" className="service_button">
              FULL SERVICE <br /> ACCOUNTING
            </Link>
            <Link href="/services/FAQ" className="service_button">
              FREQUENTLY ASKED <br /> QUESTIONS
            </Link>
            <Link href="/services/INDUSTRIES-SERVED" className="service_button">
              INDUSTRIES SERVED
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
