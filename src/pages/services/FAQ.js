import React, { useEffect } from 'react';
import './FAQ.css'; // Import the CSS for styling
import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";
import Link from 'next/link';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Cain, Bourret, Jarry & Cressman LLC</title>
        <meta name="description" content="Find answers to common tax questions about levies, liens, penalty abatements, tax audits, and more. Cain, Bourret, Jarry & Cressman LLC is here to help." />
        <link rel="canonical" href="https://cbjv.com/services/FAQ" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Frequently Asked Questions</h1>
            <hr />
            <h2>Your Tax Questions Answered</h2>
          </div>
        </div>
        <div className="faqs-container">
          <div className="faq-container">
            <div className="content">
              <p>The following is a description of the actions the IRS can take to compromise your daily lifestyle. If you want to learn more about how we can help, then contact our representatives immediately.</p>
            </div>
          </div>
          <h3><Link href="/contact/ContactUs" className="cta-button">Contact an Advisor Now</Link></h3>
          <div className="faq-container2">
            <div className="content">
              <h2>Q. What Are Levies?</h2>
              <p>A. Levies are a powerful tool the IRS uses to enforce tax collection. When the IRS issues a levy, it signifies that they have attempted to contact you about your tax debt without success. A levy allows the IRS to seize your assets, including wages (known as garnishment), bank accounts, vehicles, stocks, bonds, and other property. They will only take the amount necessary to cover your tax debt, leaving you with any excess funds. At Cain, Bouret, Jarry & Cressman LLC, we can often help you get these levies released and assist you in finding a manageable solution to resolve your tax issues.</p>

              <h2>Q. What Are Liens?</h2>
              <p>A. A lien is a legal claim the IRS places on your assets when you have unpaid taxes. This lien secures the government&#39;s interest in your property, including personal and business assets. A lien can affect everything you own, and in the case of business owners, it can even extend to accounts receivable. This means the IRS can potentially claim assets and funds from your business to satisfy your tax debt.</p>

              <h2>Q. What Are Dissipated Assets?</h2>
              <p>A. Dissipated Assets refer to funds or property that you have sold, withdrawn, or otherwise disposed of, especially in the period leading up to or during your tax issues. For example, if you withdrew $50,000 from your 401(k) and used it for personal expenses while owing back taxes, the IRS might view this as a way to bypass your tax liability. If discovered, these dissipated assets can increase the amount you need to pay as part of an Offer in Compromise. We carefully review your financial situation to avoid issues with dissipated assets before submitting an offer to the IRS.</p>

              <h2>Q. What Is an Amended (Tax) Return?</h2>
              <p>A. An amended return is a revised tax return submitted to correct errors or omissions on a previously filed return. It can be used to claim additional refunds due to newly available deductions, credits, or corrections. Amended returns can help adjust your tax liability for prior years, potentially resulting in a refund if you overpaid taxes.</p>

              <h2>Q. What Are Penalty Abatements?</h2>
              <p>A. Penalty abatement is the process of reducing or eliminating penalties imposed by the IRS for late filing or payment of taxes. While it doesn’t remove the underlying tax liability, it can significantly reduce the additional financial burden caused by penalties. This process involves demonstrating reasonable cause or other qualifying conditions to justify the reduction of penalties.</p>

              <h2>Q. What is a Statute of Limitations (Collections)?</h2>
              <p>A. The statute of limitations for tax collection is the legal time limit within which the IRS can assess and collect taxes. For collections, this period is generally 10 years from the date of the tax assessment. However, certain actions, such as submitting an Offer in Compromise or filing for bankruptcy, can extend or toll this period.</p>

              <h2>Q. What is a Wage Levy?</h2>
              <p>A. A wage levy is a type of levy specifically targeting your wages. The IRS can issue a wage levy to your employer, directing them to withhold a portion of your paycheck to satisfy your tax debt. This levy remains in effect until the IRS releases it, and it often takes a significant portion of your wages, potentially leaving you with insufficient funds for living expenses.</p>

              <h2>Q. What Is a Tax Audit?</h2>
              <p>A. A tax audit is an examination conducted by the IRS or other tax agencies to verify that you have reported your income and expenses accurately and have paid the correct amount of taxes. Audits can be random or triggered by discrepancies in your tax filings, and they involve reviewing your financial records and tax returns to ensure compliance with tax laws.</p>
              
              <p>If you’re facing any of these issues or need assistance navigating complex tax situations, contact Cain, Bourret, Jarry & Cressman LLC. We’re here to help you understand your options and work towards resolving your tax problems effectively.</p>
            </div>
          </div>
          <h3><Link href="/contact/ContactUs" className="cta-button">Contact an Advisor Now</Link></h3>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FAQ;
