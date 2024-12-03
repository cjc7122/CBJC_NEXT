import React from 'react';
import Link from "next/link";
import './Seasonal.css'; // Link to your CSS file
import '../../app/globals.css';
import Header from '../../components/Header'; // Importing the Header component
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";

const Seasonal = () => {
  const openPDF = () => {
    const pdfUrl = `/api/season-tax-pdf`;
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Seasonal Tax Letter - Cain, Bourret Jarry & Associates LLC</title>
        <meta name="description" content="Access your Seasonal Tax Letter to stay informed about important tax updates, filing deadlines, and preparation tips for the year." />
        <link rel="canonical" href="https://cbjv.com/home/Seasonal" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Seasonal Tax Letter</h1>
            <hr />
            <p>Your guide to staying informed on tax updates and deadlines.</p>
          </div>
        </div>
        <div className="seasonals-container">
          <div className="seasonal-container">
            <p>
              Stay ahead of the tax season with our Seasonal Tax Letter. This letter includes:
            </p>
            <ul>
              <li>Important tax updates and regulation changes.</li>
              <li>Filing deadlines for the current year.</li>
              <li>Tips to prepare and organize your tax documents.</li>
            </ul>
            <button onClick={openPDF} className="pdf-button">
              Open Seasonal Tax Letter
            </button>
            <p className="note">
              For any questions or further assistance, please{' '}
              <Link href="/contact/ContactUs" className="contact-link">
                contact us
              </Link>.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Seasonal;
