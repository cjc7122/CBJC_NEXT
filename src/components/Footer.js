import React from 'react';
import './Footer.css'; // Import the CSS file for Footer styling
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <i className="fas fa-building footer-icon"></i>
          <h3>OFFICE</h3>
          <p>1175 Mammoth Road, Suite 2A</p>
          <p>Dracut, MA 01826</p>
        </div>

        <div className="footer-section">
          <i className="fas fa-phone footer-icon"></i>
          <h3>CALL US</h3>
          <p>Phone: 978-957-1421</p>
          <p>Fax: 978-957-3480</p>
        </div>

        <div className="footer-section">
          <i className="fas fa-envelope footer-icon"></i>
          <h3>EMAIL</h3>
          <p><a href="mailto:contact@cpa1421.com">contact@cpa1421.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright Cain, Bourret, Jarry & Cressman LLC © 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
