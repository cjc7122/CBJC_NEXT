import React, { useState, useEffect } from 'react';
import './Header.css';
import Menu from './Menu';
import PopupMenu from './PopupMenu'; // Import the new full-screen menu
import Link from "next/link";
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [announcement, setAnnouncement] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Fetch the announcement from the API
    fetch('/api/get-announcement')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data); // Log the response to confirm structure
        setAnnouncement(data.announcement || ''); // Set announcement text or default to empty
      })
      .catch((error) => console.error('Error fetching announcement:', error));
  }, []);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header>
        <div className="contact-info">
          <button onClick={() => (window.location.href = '/admin')}>Admin Login</button>
        </div>

        <div className="menuHolder">
          <Link href="/" className="logo-container">
            {/* Replace <img> with <Image> */}
            <Image 
              src="/CBJC_Logo.png" 
              alt="CBJC Logo" 
              width={100} 
              height={100} 
              className="logo" 
            />
            <span className="logo-label">
              CAIN, BOURRET, <br />
              JARRY & CRESSMAN LLC
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <Menu />
          </div>

          {/* Mobile Menu Button */}
          <button className="menu-button" onClick={openMobileMenu}>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
          </button>
        </div>
      </header>

      {/* Announcement Bar */}
      {announcement && (
        <div className="announcement-bar">
          <p>{announcement}</p>
        </div>
      )}

      {/* Mobile Menu */}
      <PopupMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Header;
