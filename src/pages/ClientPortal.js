import React from 'react';
import './ClientPortal.css'; // Import the CSS for styling
import '../app/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const ClientPortal = () => {
  return (
    <>
      <Helmet>
        <title>Client Portal - Cain, Bourret, Jarry & Cressman LLC</title>
        <meta
          name="description"
          content="Access your documents securely through the CBJC ShareFile client portal. Upload and retrieve files electronically with ease."
        />
        <link rel="canonical" href="https://cbjv.com/ClientPortal" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Client Portal</h1>
            <hr />
            <h2>CBJC ShareFile</h2>
          </div>
        </div>
        <div className="portals-container">
          <div className="portal-container">
            <p>
              Cain, Bourret, Jarry & Cressman, LLC offers clients the option to access and upload their documents
              electronically through the ShareFile portal system. If you&#39;d like to join the portal, please contact CBJC
              to get set up.
            </p>
            <div className="portal-access">
              <p>Portal Access for Existing Clients:</p>
              <a
                href="https://auth.sharefile.io/cbjc/login?returnUrl=%2fconnect%2fauthorize%2fcallback%3fclient_id%3dDzi4UPUAg5l8beKdioecdcnmHUTWWln6%26state%3dbIo6d_0baWCagEfb8js89g--%26acr_values%3dtenant%253Acbjc%26response_type%3dcode%26redirect_uri%3dhttps%253A%252F%252Fcbjc.sharefile.com%252Flogin%252Foauthlogin%26scope%3dsharefile%253Arestapi%253Av3%2520sharefile%253Arestapi%253Av3-internal%2520offline_access%2520openid"
                className="portal-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Access Portal
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ClientPortal;
