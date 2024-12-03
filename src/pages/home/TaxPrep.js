import React from 'react';
import Link from 'next/link'; // Import Next.js Link component
import './TaxPrep.css'; // Link to your CSS file
import '../../app/globals.css';
import Header from '../../components/Header'; // Importing the Header component
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";

const TaxPrep = () => {
  const openPDF = () => {
    const pdfUrl = `/api/tax-prep-pdf`;
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Tax Prep Documents Checklist - Cain, Bourret Jarry & Associates LLC</title>
        <meta name="description" content="Access the 2023 Tax Prep Documents Checklist. Get everything you need to prepare and submit your tax documents quickly and efficiently. Upload, fax, or drop-off your tax documents with ease." />
        <link rel="canonical" href="https://cbjv.com/home/TaxPrep" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Tax Prep Documents Checklist</h1>
            <hr className="underline" />
          </div>
        </div>
        <div className="checklist-container">
          <div className="checklist-content">
            <p>Dear Client:</p>
            <p>
              Please use the link below to access a PDF copy of our Tax Prep Documents Checklist for 2023. Use this one-page list to assemble the items you need to drop-off or send to us to have your taxes prepared. Please be aware that not all the items on the list will be applicable to your particular situation.
            </p>
            <div className="btnContainer">
              <button onClick={openPDF} className="pdf-link">
                Tax Preparation Checklist
              </button>
            </div>
            <p className="italic-note">
              <strong>If you drop-off or mail-in your tax documents, please</strong> open all &#34;important tax documents enclosed&#34; envelopes, discard the envelopes and lay the documents flat. This will speed up our set-up time tremendously and get your documents to your accountant much faster! Also, please avoid placing your documents in specialized document holders/folders. While we have admired many beautiful clasp-type holders, their size makes it difficult to send through our processing system and awkward and more expensive to return by mail. A plain envelope or folder will work just fine. Please be sure to include current contact information as well.
            </p>
            <p className="italic-note">
              In addition, you can use the Cain, Bourret Jarry & Associates LLC Client Area to upload documents directly to us.{' '}
              <Link href="/contact/ContactUs" className="contact-link">
                Contact us
              </Link>{' '}
              to request an e-mail invitation to our secure Client Area. You will receive a unique Username (your e-mail) and temporary Password. After you log in, you should update your temporary password. Any time you need to access your online folder again, you can do so directly from our website main page using your login credentials. Just click on the{' '}
              <Link href="/ClientPortal" className="contact-link">
                Client Area
              </Link>{' '}
              link at the bottom left of our homepage. If you take photos of your documents to upload, please use a scan app. Camera photos of documents do not have enough resolution to be readable when printed.
            </p>
            <p className="italic-note">
              You can also fax your documents to us at 978-957-3480. The old-fashioned, but most secure way to send documents!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TaxPrep;
