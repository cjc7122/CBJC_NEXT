import React from 'react';
import './ClientConsent.css'; // Link to your CSS file
import '../../app/globals.css';
import Header from '../../components/Header'; // Importing the Header component
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";

const ClientConsent = () => {
  const openPDF = () => {
    const pdfUrl = `/api/client-consent-pdf`;
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Client Consent Form - Cain, Bourret, Jarry & Associates LLC</title>
        <meta name="description" content="Access the Client Consent Form required for sharing tax information with third parties. Print, sign, and return the form to Cain, Bourret, Jarry & Associates LLC." />
        <link rel="canonical" href="https://yourwebsite.com/client-consent-form" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Client Consent Form</h1>
            <hr />
          </div>
        </div>
        <div className="consents-container">
          <div className="consent-container">
            <p>Dear Client,</p>
            <p>
              Federal law requires this consent form be provided to you if you want us to provide information directly to a third party.
              As an alternative to signing this release form, you may request that we simply send you the information needed, as paper copies
              or electronic PDF files, so that you can forward it to the third party of your choice.
            </p>
            <p>
              If you desire for us to send your tax information directly to the third party, please print this form, sign it, and return it to us.
            </p>
            <p className="closing">
              Thank you,<br />
              The Staff at Cain, Bourret, Jarry & Associates LLC
            </p>
          </div>
          <button onClick={openPDF} className="pdf-button">
            Open Client Consent Form
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ClientConsent;
