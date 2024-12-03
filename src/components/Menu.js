import React from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import './Menu.css';

const Menu = ({ isOpen }) => {
  const router = useRouter();

  const handleMenuClick = (path, hash) => {
    router.push(path); // Navigate to the path, like "/services"
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <ul className="HMenu">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li className="menu-item">
          <Link href="/">Home</Link>
          <ul className="big-submenu">
            <li><Link href="/home/ClientConsent">CLIENT CONSENT FOR DISCLOSURE OF INFORMATION TO A THIRD PARTY</Link></li>
            <li><Link href="/home/TaxPrep">TAX PREP DOCUMENTS CHECKLIST</Link></li>
            <li><Link href="/home/Seasonal">SEASONAL TAX LETTER PDF</Link></li>
          </ul>
        </li>
        <li className="menu-item">
          <Link href="/Service-Home">Services</Link>
          <ul className="big-submenu">
          <li><Link href="/services/ACCOUNTING-AUDIT">AUDIT</Link></li>
            <li><Link href="/services/TAX-PLANNING">TAX</Link></li>
            <li><Link href="/services/BUIS-OPS">ADVISORY</Link></li>
            <li><Link href="/services/PAYROLL">FULL SERVICES ACCOUNTING</Link></li>
            <li><Link href="/services/INDUSTRIES-SERVED">INDUSTRIES SERVED</Link></li>
            <li><Link href="/services/FAQ">FREQUENTLY ASKED QUESTIONS</Link></li>
          </ul>
        </li>
        <li className="menu-item">
          <Link href="/firm/OurTeam">Firm</Link>
          <ul className="big-submenu">
            <li><Link href="/firm/OurTeam">OUR TEAM</Link></li>
            <li><Link href="/firm/History">HISTORY OF OUR FIRM</Link></li>
          </ul>
        </li>
        <li className="menu-item">
          <Link href="/contact/ContactUs">Contact Us</Link>
          <ul className="submenu">
            <li><Link href="/contact/ContactUs">GENERAL</Link></li>
            <li><Link href="/contact/Careers">CAREERS</Link></li>
          </ul>
        </li>
        <li><Link href="/ClientPortal">Portal</Link></li>
        <li className="menu-item">
          <a>Payments</a>
          <ul className="big-submenu">
            <li><Link href="/payments/venmo">VENMO</Link></li>
            <li><Link href="/payments/CreditCard">CREDIT CARD</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
