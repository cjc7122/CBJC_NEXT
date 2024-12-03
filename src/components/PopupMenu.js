import React from 'react';
import Link from "next/link";
import './PopupMenu.css';

const PopupMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`popup-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-menu" onClick={onClose}>✖</button>
      <ul className="popup-menu-list">
        <li>
          <Link href="/">Home</Link>
          <ul className="submenu">
            <li><Link href="/home/ClientConsent">CLIENT CONSENT FOR DISCLOSURE OF INFORMATION TO A THIRD PARTY</Link></li>
            <li><Link href="/home/TaxPrep">TAX PREP DOCUMENTS CHECKLIST</Link></li>
            <li><Link href="/home/Seasonal">SEASONAL TAX LETTER PDF</Link></li>
          </ul>
        </li>
        <li>
          <Link href="/Service-Home">Services</Link>
          <ul className="submenu">
            <li><Link href="/services/ACCOUNTING-AUDIT">AUDIT</Link></li>
            <li><Link href="/services/TAX-PLANNING">TAX</Link></li>
            <li><Link href="/services/BUIS-OPS">ADVISORY</Link></li>
            <li><Link href="/services/PAYROLL">FULL SERVICES ACCOUNTING</Link></li>
            <li><Link href="/services/INDUSTRIES-SERVED">INDUSTRIES SERVED</Link></li>
            <li><Link href="/services/FAQ">FREQUENTLY ASKED QUESTIONS</Link></li>
          </ul>
        </li>
        <li>
          <Link href="/firm/OurTeam">Firm</Link>
          <ul className="submenu">
            <li><Link href="/firm/OurTeam">OUR TEAM</Link></li>
            <li><Link href="/firm/History">HISTORY OF OUR FIRM</Link></li>
          </ul>
        </li>
        <li>
          <Link href="/contact/ContactUs">Contact Us</Link>
          <ul className="submenu">
            <li><Link href="/contact/ContactUs">GENERAL</Link></li>
            <li><Link href="/contact/Careers">CAREERS</Link></li>
          </ul>
        </li>
        <li>
          <Link href="/ClientPortal">Portal</Link>
        </li>
        <li>
          <a>Payments</a>
          <ul className="submenu">
            <li><Link href="/payments/venmo">VENMO</Link></li>
            <li><Link href="/payments/CreditCard">CREDIT CARD</Link></li>
          </ul>
        </li>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default PopupMenu;
