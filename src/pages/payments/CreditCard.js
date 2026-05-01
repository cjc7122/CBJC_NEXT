import React, { useEffect } from 'react';
import Image from 'next/image';
import './CreditCard.css'; 
import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";

const CreditCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Pay Online | Secure Payment Portal | Cain, Bourret, Jarry & Cressman LLC</title>
        <meta name="description" content="Make a secure online payment to Cain, Bourret, Jarry & Cressman LLC using our payment portal. Credit and debit cards accepted." />
        <link rel="canonical" href="https://cbjv.com/payments/CreditCard" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Pay Online</h1>
            <hr />
            <h2>Secure Payment Portal</h2>
          </div>
        </div>
        <div className="CreditsContainer">
          <div className="CreditContainer">
            <h2>Scan to Pay</h2>
            <p>Scan the QR code below with your phone to be directed to our secure payment portal.</p>
            <div className="qr-wrapper">
              <Image
                src="/payment-qr.png"
                alt="Scan to make a secure payment"
                width={280}
                height={280}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CreditCard;
