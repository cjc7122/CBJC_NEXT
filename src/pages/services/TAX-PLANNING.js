import React, { useEffect } from 'react';
import './TAX-PLANNING.css'; // Import the CSS for styling
import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";
import Link from 'next/link';

const TAX_PLANNING = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tax Planning & Preparation | CPA | Dracut, MA | Cain, Bourret, Jarry & Cressman LLC</title>
        <meta name="description" content="Year-round tax planning and preparation for individuals and businesses in Dracut, MA and the Merrimack Valley. IRS representation, Offers in Compromise, and unfiled return resolution from licensed CPAs and Enrolled Agents." />
        <link rel="canonical" href="https://cbjv.com/services/TAX-PLANNING" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Tax Planning & Preparation</h1>
            <hr />
            <h2>Year-Round Strategy for Individuals & Businesses</h2>
          </div>
        </div>
        <div className="taxes-container">
          <div className="tax-container">
            <div className="content">
              <p>Smart tax planning isn&#39;t something that happens in April &mdash; it&#39;s a year-round strategy. At Cain, Bourret, Jarry &amp; Cressman LLC, our team works with individuals and businesses to develop tax plans that align with your financial goals, keep you compliant, and position you to make informed decisions throughout the year.</p>

              <h2>What We Offer:</h2>
              <ul>
                <li><strong>Personalized Tax Planning:</strong> We take time to understand your unique financial picture and build a strategy around your goals &mdash; not a one-size-fits-all template.</li>
                <li><strong>Tax Preparation:</strong> Accurate, thorough preparation for individuals, businesses, partnerships, estates, and trusts &mdash; filed on time and compliant with current law.</li>
                <li><strong>Year-Round Availability:</strong> Tax questions don&#39;t wait for April. We&#39;re available twelve months a year to help you plan ahead, respond to changes, and avoid surprises.</li>
                <li><strong>Proactive Guidance:</strong> From retirement contributions to business structuring, we help you identify opportunities to optimize your tax position before the year closes.</li>
              </ul>
            </div>

            <h1>IRS Offers in Compromise</h1>

            <div className="content">
              <p>If you have an outstanding tax balance with the IRS, an Offer in Compromise (OIC) may be worth exploring. This IRS program allows qualifying individuals to settle a tax debt for less than the full amount owed &mdash; and in some cases, the savings can be substantial.</p>

              <h3>Is an Offer in Compromise Right for You?</h3>
              <ul>
                <li><strong>Eligibility Matters:</strong> Not everyone qualifies for an OIC. The IRS evaluates your ability to pay, income, expenses, and asset equity. We&#39;ll assess your candidacy upfront at no charge before any fees are involved.</li>
                <li><strong>A Word of Caution:</strong> Be wary of firms advertising OIC settlements for &#34;pennies on the dollar&#34; with large upfront fees. The process is complex and approval is not guaranteed. We bring honesty and experience to every case.</li>
              </ul>

              <h3>Our Approach:</h3>
              <p>1. <strong>Free Initial Consultation:</strong> We offer a complimentary half-hour consultation &mdash; in person or by phone &mdash; to review your situation and determine whether an OIC is viable.</p>
              <p>2. <strong>Experienced Negotiation:</strong> We have negotiated hundreds of Offers in Compromise and understand the documentation, financial disclosures, and potential complications involved.</p>
              <p>3. <strong>Complete and Accurate Filings:</strong> A poorly prepared OIC is often the reason for rejection. We ensure your application is thorough and addresses common pitfalls before submission.</p>
              <p>4. <strong>Alternative Solutions:</strong> If an OIC isn&#39;t the right fit, we&#39;ll explore other paths &mdash; installment agreements, currently not collectible status, penalty abatements, or amended returns.</p>
              <p>5. <strong>Local, Hands-On Support:</strong> You&#39;ll work directly with our professionals, not be handed off to a call center. We&#39;re invested in your outcome.</p>
            </div>

            <h1>Unfiled Tax Returns</h1>

            <div className="content">
              <p>If you have one or more years of unfiled returns, you&#39;re not alone &mdash; and getting back into compliance is more straightforward than many people expect. The sooner you address it, the more options you have.</p>

              <h3>Getting Back on Track:</h3>
              <ul>
                <li><strong>No Judgment, Just Solutions:</strong> Life happens. Whether it was a difficult year or you simply fell behind, we help you move forward without making you feel worse about the past.</li>
                <li><strong>Filing Requirements:</strong> U.S. taxpayers are required to file a return each year income thresholds are met. Older unfiled returns can carry penalties and interest, but they&#39;re manageable with the right approach.</li>
              </ul>

              <h3>Our Process:</h3>
              <p>1. <strong>Assessment:</strong> We identify which years need to be filed and gather the relevant financial information.</p>
              <p>2. <strong>Income Reconstruction:</strong> If records are incomplete, we reconstruct income using bank statements, 1099s, and other available documentation.</p>
              <p>3. <strong>Accurate Filing:</strong> We prepare and file your returns in compliance with IRS requirements, taking all allowable deductions into account.</p>
              <p>4. <strong>IRS Representation:</strong> If penalties or balances result from the filings, we can negotiate on your behalf for the most favorable outcome.</p>
              <p>5. <strong>A Plan Going Forward:</strong> We&#39;ll help you establish a system that keeps you compliant going forward.</p>
            </div>

            <h1>Responding to IRS Notices &amp; Letters</h1>

            <div className="content">
              <p>Receiving a letter from the IRS can be unsettling, but most notices are routine and have straightforward resolutions. As CPAs and enrolled agents, we handle IRS correspondence regularly and know how to respond quickly and effectively.</p>

              <p>1. <strong>Review and Analyze:</strong> We carefully review the notice to understand exactly what the IRS is asking &mdash; whether it&#39;s a discrepancy, audit request, or collection matter.</p>
              <p>2. <strong>Strategy and Response:</strong> We develop a clear response plan and represent your interests throughout the process.</p>
              <p>3. <strong>Direct Communication:</strong> We handle all correspondence with the IRS or state tax agencies on your behalf.</p>
              <p>4. <strong>Timely Action:</strong> IRS notices have deadlines. Responding promptly limits additional interest and penalties and keeps your options open.</p>
              <p>5. <strong>Keeping You Informed:</strong> We explain every step in plain language, so you always know where things stand.</p>
              <p>If you&#39;ve received a tax notice, don&#39;t ignore it &mdash; but don&#39;t stress either. Reach out and we&#39;ll help you understand exactly what it means and what to do next.</p>
            </div>
            <p>Questions? Contact a Certified Public Accountant or Enrolled Agent at any time.</p>
          </div>
          <h3><Link href="/contact/ContactUs">Contact an Advisor</Link></h3>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default TAX_PLANNING;