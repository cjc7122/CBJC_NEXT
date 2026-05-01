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
        <title>Tax & Accounting FAQ | CPA Firm Dracut MA | Cain, Bourret, Jarry & Cressman LLC</title>
        <meta name="description" content="Answers to common tax questions from licensed CPAs in Dracut, MA. Learn about IRS levies, liens, tax audits, penalty abatement, and more in plain language." />
        <link rel="canonical" href="https://cbjv.com/services/FAQ" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Frequently Asked Questions</h1>
            <hr />
            <h2>Plain-Language Answers to Common Tax Questions</h2>
          </div>
        </div>
        <div className="faqs-container">
          <div className="faq-container">
            <div className="content">
              <p>Tax law can feel overwhelming — especially when you encounter unfamiliar terms in a notice or letter. Below are clear explanations of common IRS concepts. If your situation isn&#39;t covered here, we&#39;re always happy to talk it through with you directly.</p>
            </div>
          </div>
          <h3><Link href="/contact/ContactUs" className="cta-button">Speak With an Advisor</Link></h3>
          <div className="faq-container2">
            <div className="content">
              <h2>Q. What Is a Tax Levy?</h2>
              <p>A. A levy is a collection action the IRS may use after other contact attempts have been unsuccessful. It allows the IRS to collect against specific assets — such as wages, bank accounts, or property — up to the amount owed. If you receive a levy notice, acting promptly gives you the best range of options. Our team can help you understand your rights, communicate with the IRS, and work toward a resolution.</p>

              <h2>Q. What Is a Tax Lien?</h2>
              <p>A. A tax lien is a legal claim the IRS files against your property when a tax balance goes unpaid. It protects the government&#39;s interest in your assets and can affect your credit and ability to sell or refinance property. Liens can often be addressed through payment arrangements, appeals, or other relief options — and we can walk you through the process.</p>

              <h2>Q. What Are Dissipated Assets?</h2>
              <p>A. In the context of an IRS Offer in Compromise, dissipated assets are funds or property transferred, sold, or used for non-essential purposes while a tax debt was outstanding. The IRS may consider these when evaluating your ability to pay. We carefully review your full financial picture before submitting any offer to ensure it accurately reflects your situation.</p>

              <h2>Q. What Is an Amended Tax Return?</h2>
              <p>A. An amended return lets you correct a previously filed tax return — whether to fix an error, add overlooked deductions, or adjust reported income. Depending on the changes, an amendment can result in a refund or a reduction in what you owe. There is generally a three-year window to claim a refund on an amended return.</p>

              <h2>Q. What Is Penalty Abatement?</h2>
              <p>A. Penalty abatement is a formal request to reduce or remove IRS penalties for late filing or late payment. It does not eliminate the underlying tax owed, but can meaningfully reduce your total balance. The IRS grants abatements based on reasonable cause — such as illness, natural disaster, or reliance on incorrect advice. We can evaluate your eligibility and prepare the request on your behalf.</p>

              <h2>Q. What Is the Statute of Limitations on Tax Collections?</h2>
              <p>A. The IRS generally has 10 years from the date of assessment to collect a tax debt. Certain actions — such as submitting an Offer in Compromise or filing for bankruptcy — can pause or extend this period. Understanding where a debt stands relative to the statute of limitations is an important part of any tax resolution strategy.</p>

              <h2>Q. What Is a Wage Levy?</h2>
              <p>A. A wage levy (sometimes called wage garnishment) directs your employer to withhold a portion of each paycheck and send it to the IRS until the balance is satisfied or the levy is released. If you&#39;ve received a wage levy notice, we can act quickly to explore options for release or an alternative resolution.</p>

              <h2>Q. What Is a Tax Audit?</h2>
              <p>A. A tax audit is an IRS review of your filed return to verify that your income, deductions, and credits are accurate. Audits can be correspondence-based (by mail) or in-person, and range from simple document requests to full examinations. Having a CPA or enrolled agent represent you ensures your rights are protected and your response is well-prepared.</p>
              
              <p>Have a question not covered here? <Link href="/contact/ContactUs" className="contact-link">Reach out</Link> — we&#39;re happy to help you understand your options, no pressure and no jargon.</p>
            </div>
          </div>
          <h3><Link href="/contact/ContactUs" className="cta-button">Contact an Advisor</Link></h3>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FAQ;
