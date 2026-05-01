import React, { useEffect } from 'react';
import './ACCOUNTING-AUDIT.css'; // Import the CSS for styling
import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";
import Link from 'next/link';

const AccountingAudit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Accounting & Audit Services | CPA Firm | Dracut, MA | Cain, Bourret, Jarry & Cressman LLC</title>
        <meta name="description" content="Professional audit, review, and compilation services from a trusted CPA firm in Dracut, MA. Serving businesses in the Merrimack Valley with GAAP-compliant financial reporting and internal control studies." />
        <link rel="canonical" href="https://cbjv.com/services/ACCOUNTING-AUDIT" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Accounting & Audit Services</h1>
            <hr />
            <h2>Reliable Financial Insights for Your Business</h2>
          </div>
        </div>
        <div className="audits-container">
          <div className="audit-container">
            <div className="content">
              <h2>Audit Services:</h2>
              <p>We offer a range of audit and assurance services tailored to meet your specific needs. Our goal is to provide you with accurate, reliable financial information and insights that support your business decisions and ensure compliance with industry standards.</p>
              
              <ul className="audit">
                <li><strong>In-Depth Analysis and Evaluation:</strong> We conduct a thorough examination of your internal controls, followed by a detailed audit of your financial statements.</li>
                <li><strong>GAAP Compliance:</strong> Our audit opinions are issued in accordance with Generally Accepted Accounting Principles (GAAP), ensuring that your financial statements reflect a true and fair view of your financial position.</li>
              </ul>

              <h2>Review Services:</h2>
              <ul className="audit">
                <li><strong>Analytical Procedures:</strong> We perform analytical procedures to assess the consistency of your financial statements from year to year.</li>
                <li><strong>Variance Analysis:</strong> By identifying and investigating unexpected variances, we help you evaluate your operating effectiveness and profitability.</li>
              </ul>

              <h2>Compilation Services:</h2>
              <ul className="audit">
                <li><strong>Financial Statement Compilation:</strong> We compile your financial statements on a regular basis—monthly, quarterly, or yearly—depending on your needs.</li>
                <li><strong>As-Needed Basis:</strong> Our services are flexible, adapting to your company’s schedule and requirements.</li>
              </ul>

              <h2>Other Assurance Services:</h2>
              <ul className="audit">
                <li><strong>Agreed-Upon Procedures:</strong> We perform specific procedures as agreed upon for various purposes, such as grantor requirements or contractor compliance for bonding.</li>
                <li><strong>Internal Control Studies:</strong> Our internal control studies help identify weaknesses and areas for improvement.</li>
                <li><strong>Litigation Support:</strong> We provide support for legal matters requiring financial expertise.</li>
              </ul>
            </div>
          </div>
          <h3 className="contact">
            <Link href="/contact/ContactUs" className="cta-button">Contact an Advisor Now</Link>
          </h3>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AccountingAudit;
