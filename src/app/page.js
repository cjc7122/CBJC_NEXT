"use client";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';
import './globals.css';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Cain, Bourret, Jarry & Cressman LLC",
  "description": "Full-service CPA firm providing tax planning, accounting, audit, payroll, and advisory services to individuals and businesses throughout the Merrimack Valley.",
  "url": "https://cbjv.com",
  "logo": "https://cbjv.com/CBJC_Logo.png",
  "image": "https://cbjv.com/CBJC_Logo.png",
  "telephone": "+1-978-957-1421",
  "faxNumber": "+1-978-957-3480",
  "email": "contact@cpa1421.com",
  "foundingDate": "1992",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1175 Mammoth Road, Suite 2A",
    "addressLocality": "Dracut",
    "addressRegion": "MA",
    "postalCode": "01826",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.6918,
    "longitude": -71.2997
  },
  "areaServed": [
    "Dracut, MA", "Lowell, MA", "Chelmsford, MA", "Tewksbury, MA",
    "Westford, MA", "Dunstable, MA", "Londonderry, NH", "Merrimack Valley"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:30",
    "closes": "17:00"
  },
  "sameAs": [],
  "priceRange": "$$",
  "hasMap": "https://www.google.com/maps/place/1175+Mammoth+Road,+Suite+2A,+Dracut,+MA+01826",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-978-957-1421",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English"
  }
};

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
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
          <h3>Proactive Financial Strategy for Individuals & Businesses</h3>
          <p className="highlighted-text">Your financial goals drive everything we do.</p>
          <p>
            With over 30 years of experience serving the Merrimack Valley, our team
            brings the depth of a large firm with the personal attention only a
            close-knit practice can offer. We take time to understand your situation,
            ask the right questions, and build a strategy tailored specifically to you —
            not a template.
          </p>
          <h3>Ready to get started?</h3>
          <p>Call (978) 957-1421 for a complimentary consultation.</p>
          <p>Monday – Friday, 8:30 a.m. – 5:00 p.m.</p>
          <p className="address">1175 Mammoth Rd, Suite 2A, Dracut MA 01826</p>
          <p>We&#39;re here year-round — not just at tax time.</p>
          <Link href="/firm/OurTeam" className="learn-more-btn">
            Meet Our Team
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
