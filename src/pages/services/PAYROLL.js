import React, { useEffect } from 'react';
import './PAYROLL.css'; // Import the CSS for styling
import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";
import Link from 'next/link';

const Payroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Payroll & Bookkeeping Services - Cain, Bourret, Jarry & Cressman LLC</title>
        <meta name="description" content="Simplify payroll management and bookkeeping with Cain, Bourret, Jarry & Cressman LLC. We handle tax liabilities, payroll reports, accounting software setup, and more." />
        <link rel="canonical" href="https://CBJV.com/services/payroll" />
      </Helmet>
      <div id="service1" className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Expert Payroll and Bookkeeping Services</h1>
            <hr />
            <h2>Payroll & Bookkeeping</h2>
          </div>
        </div>
        <div className="payrolls-container">
          <div className="payroll-container">
            <div className="content">
              <h2>Payroll</h2>
              <p>Managing payroll can indeed be a complex and time-consuming task, especially with the constant changes in tax laws and deposit rules. Cain, Bourret, Jarry & Cressman LLC is here to simplify this process for you, providing a comprehensive payroll solution that allows you to focus on growing your business while we handle the intricacies of payroll management.</p>

              <h3>Our Payroll Services Include:</h3>
              <ul>
                <li>Employee Payments: Flexible payment options for your employees.</li>
                <li>Federal Tax Liabilities: Management of federal payroll taxes, including 940 and 941 forms.</li>
                <li>State & Local Tax Liabilities: Compliance with state and local payroll taxes.</li>
                <li>Quarterly & Year-End Tax Forms: Preparation of W-2s, W-3s, and 1099s.</li>
                <li>Customized Payroll Reports: Detailed reports tailored to your business needs.</li>
                <li>Tax Deposit Services: On-time payroll tax deposits to avoid penalties.</li>
                <li>State & Federal Unemployment Returns: Filing of unemployment returns.</li>
              </ul>

              <h2>Bookkeeping</h2>
              <p>We offer comprehensive bookkeeping services designed to be both cost-effective and flexible.</p>

              <h3>We will guide you through:</h3>
              <ul>
                <li>Choosing the Right Accounting Method: Accrual or cash accounting recommendations.</li>
                <li>Selecting Accounting Software: Setup of efficient financial software.</li>
                <li>Assessing Your Financial Position: Insights into financial standing.</li>
                <li>Identifying Key Performance Indicators (KPIs): Metrics to drive performance.</li>
                <li>Maximizing Savings: Identifying cost-saving opportunities.</li>
              </ul>

              <p>Our CPAs and Enrolled Agents can review, file, and prepare your tax returns to keep you compliant.</p>
            </div>
          </div>
          <h3 className="contact">
            <Link href="/contact/ContactUs" className="cta-button">Get Professional Payroll Help Today</Link>
          </h3>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Payroll;
