import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import './venmo.css';
import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";

const VenmoPage = () => {
  return (
    <>
      <Helmet>
        <title>Pay with Venmo - CPA Payment Portal</title>
        <meta name="description" content="Easily pay your invoices using Venmo. Include your full name, company name, and invoice number for accurate payment processing. Secure and convenient payment with @CPA1421." />
        <link rel="canonical" href="https://cbjv.com/payments/venmo" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Pay with Venmo</h1>
            <hr />
          </div>
        </div>
        <div className="venmos-container">
          <div className="venmo-container">
            <div className="company-info">
              <Image 
                src="/CPA.png" 
                alt="Company Logo" 
                className="company-logo" 
                width={300} // Specify the actual width of the logo
                height={300} // Specify the actual height of the logo
              />
            </div>
            <p className="instructions">
              Please provide your full name (and company name if applicable) and invoice number in the description
              so that your payment can be correctly applied to your account.
            </p>
            <div className="venmo-info">
              <p className="venmo-handle">@CPA1421</p>
              <Image 
                src="/venmo.png" 
                alt="Venmo QR Code for Payments" 
                className="qr-code" 
                width={200} // Specify the actual width of the QR code
                height={200} // Specify the actual height of the QR code
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default VenmoPage;
