import React, { useEffect } from 'react';
import './INDUSTRIES-SERVED.css'; // Import the CSS for styling
import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";
import Link from 'next/link';

const IndustriesServed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Industries We Serve - Cain, Bourret, Jarry & Cressman LLC</title>
        <meta name="description" content="Explore the industries we serve, including construction, retail, technology, and more. Cain, Bourret, Jarry & Cressman LLC offers expert financial services tailored to your industry." />
        <link rel="canonical" href="https://CBJV.com/services/INDUSTRIES-SERVED" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Industries We Serve</h1>
            <hr />
            <h2>Expert Financial Services Tailored to Your Industry</h2>
          </div>
        </div>
        <div className="industries-container">
          <div className="industry-container">
            <ul>
              <li><strong>Construction:</strong> Expert financial management for contractors, builders, and developers.</li>
              <li><strong>Homeowner/Condo Associations:</strong> Budgeting, financial planning, and tax services for associations.</li>
              <li><strong>Property Management Companies:</strong> Streamlined bookkeeping and tax preparation for property managers.</li>
              <li><strong>Manufacturing:</strong> Cost analysis, tax optimization, and compliance for manufacturers.</li>
              <li><strong>Not-For-Profit:</strong> Specialized accounting services for non-profit organizations.</li>
              <li><strong>Professional Services:</strong> Financial solutions tailored to consulting, legal, and other professional fields.</li>
              <li><strong>Retail:</strong> Inventory management and financial planning for retail businesses.</li>
              <li><strong>Small Business:</strong> Comprehensive support for startups and growing businesses.</li>
              <li><strong>Technology:</strong> Tax strategies and financial planning for tech companies and startups.</li>
            </ul>
          </div>
          <h3 className="contact">
            <Link href="/contact/ContactUs" className="cta-button">Get Expert Industry-Specific Advice</Link>
          </h3>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default IndustriesServed;
