"use client";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';
import './globals.css';

function Home() {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <div className="background-section">
        <div className="overlay">
          <h1>Big Firm Capability. Small Firm Personality</h1>
          <button className="learn-more-btn" onClick={() => handleClick('/Service-Home')}>Learn More</button>
        </div>
      </div>
      <div className="homeWrapper">
        <div className="services">
          <h1>Our Services</h1>
          <hr />
          <div className="grid-holder">
            <div className="service-grid">
              <div className="service-item" onClick={() => handleClick('/services/ACCOUNTING-AUDIT')}>
                <Image src="/icon.webp" alt="Service Icon" width={100} height={100} />
                <h2>AUDIT</h2>
                <p className="learn-more-text">Learn More</p>
              </div>
              <div className="service-item" onClick={() => handleClick('/services/TAX-PLANNING')}>
                <Image src="/icon.webp" alt="Service Icon" width={100} height={100} />
                <h2>TAX</h2>
                <p className="learn-more-text">Learn More</p>
              </div>
              <div className="service-item" onClick={() => handleClick('/services/BUIS-OPS')}>
                <Image src="/icon.webp" alt="Service Icon" width={100} height={100} />
                <h2>ADVISORY</h2>
                <p className="learn-more-text">Learn More</p>
              </div>
              <div className="service-item" onClick={() => handleClick('/services/PAYROLL')}>
                <Image src="/icon.webp" alt="Service Icon" width={100} height={100} />
                <h2>FULL SERVICE ACCOUNTING</h2>
                <p className="learn-more-text">Learn More</p>
              </div>
            </div>
          </div>
        </div>
        <div className="info-section">
          <h2>Certified Public Accountants & Business Advisors</h2>
          <hr />
          <h3>Expert Accounting, Tax and Business Guidance</h3>
          <p className="highlighted-text">Who is the Most Important Person in Our Firm? You!</p>
          <p>
            Our professional team is available when you need us with personalized
            attention tailored to fit your specific needs. Open communication is vital
            to a good client-professional relationship. We want you to feel comfortable
            asking us questions and discussing your concerns at all times. You will find
            us to be good listeners and responsive to your needs.
          </p>
          <h3>You have Questions? We have Answers!</h3>
          <p>Call (978) 957-1421 Today for a Free Consultation!</p>
          <p>Monday - Friday, 8:30 a.m. - 5:00 p.m.</p>
          <p className="address">1175 Mammoth Rd, Dracut MA 01826</p>
          <p>We&#39;re Dedicated to Your Success!</p>
          <Link href="/firm/OurTeam" className="learn-more-btn">
            Learn More
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
