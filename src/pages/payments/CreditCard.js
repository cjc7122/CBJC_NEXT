import React, { useEffect } from 'react';
import Image from 'next/image'; // Importing Next.js Image component
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
        <title>Pay By Credit Card - Secure Payment Portal</title>
        <meta name="description" content="Make secure payments with your credit card. Use our convenient and easy-to-use credit card payment portal." />
        <link rel="canonical" href="https://CBJV.com/payments/CreditCard" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Pay By Credit Card</h1>
            <hr />
            <h2>Secure Payment Portal</h2>
          </div>
        </div>
        <div className="CreditsContainer">
          <div className="CreditContainer">
            <h2>Make a Payment</h2>
            <p>We offer a secure and convenient way to pay your bills online using your credit card. Simply fill out the form below to complete your payment.</p>

            <form className="payment-form">
              <div className="form-group">
                <label htmlFor="name">Name on Card</label>
                <input type="text" id="name" placeholder="Enter cardholder name" required />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" placeholder="Enter card number" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input type="text" id="expiryDate" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" placeholder="CVV" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="amount">Payment Amount</label>
                <input type="number" id="amount" placeholder="Enter payment amount" required />
              </div>
              <button type="submit" className="submit-button">Submit Payment</button>
            </form>

            <div className="secure-note">
              <p><strong>Note:</strong> Your payment information is processed securely. We do not store your credit card details on our servers.</p>
              {/* Updated Image with Next.js Image Component */}
              <Image
                src="/images/secure-payment.png"
                alt="Secure Payment"
                className="secure-icon"
                width={100} // Specify the width of the image
                height={100} // Specify the height of the image
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
