import React from 'react';
import './History.css'; // Import the CSS for styling
import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';

const History = () => {
  return (
    <>
      <Helmet>
        <title>Our History | CPA Firm Dracut MA | Cain, Bourret, Jarry & Cressman LLC</title>
        <meta
          name="description"
          content="Learn the history of Cain, Bourret, Jarry & Cressman LLC, a CPA firm founded in Dracut, MA in 1992. Over 30 years of accounting, tax, and advisory excellence in the Merrimack Valley."
        />
        <link rel="canonical" href="https://cbjv.com/firm/History" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>CAIN, BOURRET, JARRY & CRESSMAN LLC</h1>
            <hr />
            <h2>HISTORY OF FIRM</h2>
          </div>
        </div>
        <div className="histories-container">
          <div className="history-container">
            <p>
              Stephen A. Cain and Steven R. Bourret formed Cain &amp; Bourret P.C. (CB) on December 31, 1992. In January 2002, Cain &amp; Bourret purchased Vaillancourt and Company (VCO) of Dracut, Massachusetts, and brought in a former employee, David Jarry, as an additional partner. This new entity was now known as Cain, Bourret, Jarry &amp; Vaillancourt P.C. Upon Dave Vaillancourt’s retirement from the practice in 2008, the firm became Cain, Bourret, Jarry &amp; Associates, PC.
            </p>
            <p>
              In September 2019, Kristin M. Cressman, CPA, MST, was admitted as a partner. Kristin was a sole practitioner previously operating in Westford, Massachusetts. In May 2020, the firm officially changed its name to Cain, Bourret, Jarry &amp; Cressman LLC. The three partners were Steven R. Bourret, David A. Jarry, and Kristin M. Cressman.
            </p>
            <p>
              In December 2021, Steven Bourret sold his 100% interest in the firm to Kristin Cressman, and in December 2022, David Jarry sold his 100% interest to his son Kevin Jarry. The two remaining equity partners are Kristin Cressman and Kevin Jarry.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default History;

