import React from 'react';
import './ContactUs.css'; // Import the CSS for styling
import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ReCAPTCHA from 'react-google-recaptcha';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  const handleRecaptcha = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | CPA Firm Dracut MA & Londonderry NH | Cain, Bourret, Jarry & Cressman LLC</title>
        <meta
          name="description"
          content="Contact Cain, Bourret, Jarry & Cressman LLC at our offices in Dracut, MA or Londonderry, NH. Call (978) 957-1421 for a free consultation with a licensed CPA."
        />
        <link rel="canonical" href="https://cbjv.com/contact/ContactUs" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Let&#39;s Start a Conversation</h1>
            <hr />
            <h2>We would love to hear from you!</h2>
          </div>
        </div>
        <div className="contacts-container">
          <div className="contact-container">
            <div className="contact-intro">
              <h1>Superior Accounting Services Tailored to You</h1>
              <p>
                <strong>Cain, Bourret, Jarry & Cressman LLC, serving Dracut, MA, and the surrounding Merrimack Valley</strong>, has helped individuals and businesses with their <strong>accounting, auditing, tax planning, preparation, and more</strong> for over 25 years.
                Call <a href="tel:9789571421">(978) 957-1421</a> to speak with an expert today.
              </p>
              <p className="hours">
                <strong>Monday – Friday, 8:30 a.m. – 5:00 p.m.</strong>
              </p>
            </div>

            <div className="postcards-container">
              <div className="postcard postcard-left">
                <h2 className="postcard-title">Massachusetts</h2>
                <div className="postcard-content">
                  <div className="postcard-column address">
                    <p>Address: 1175 Mammoth Road, Suite 2A, Dracut, MA, 01826</p>
                  </div>
                  <div className="postcard-column contact">
                    <p>Phone: <a href="tel:9789571421">(978) 957-1421</a></p>
                    <p>Fax: (978) 957-3480</p>
                  </div>
                </div>
                <div className="map">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?q=1175+Mammoth+Road,+Suite+2A,+Dracut,+MA,+01826&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                    allowFullScreen=""
                    loading="lazy"
                    title="Massachusetts Office"
                  ></iframe>
                </div>
              </div>

              <div className="postcard postcard-right">
                <h2 className="postcard-title">New Hampshire</h2>
                <div className="postcard-content">
                  <div className="postcard-column address">
                    <p>Address: 12 Parmenter Road, Building D, Unit 3, Londonderry, NH 03053</p>
                  </div>
                  <div className="postcard-column contact">
                    <p>Phone: <a href="tel:6034329222">(603) 432-9222</a></p>
                  </div>
                </div>
                <div className="map">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?q=12+Parmenter+Road,+Building+D,+Unit+3,+Londonderry,+NH+03053&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                    allowFullScreen=""
                    loading="lazy"
                    title="New Hampshire Office"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="message-box">
              <h3>Send Us a Message</h3>
              <form>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="comments" placeholder="Comments" rows="4" required></textarea>

                {/* Google reCAPTCHA */}
                <div className="captcha">
                  <ReCAPTCHA
                    sitekey="your-google-recaptcha-site-key"
                    onChange={handleRecaptcha}
                  />
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
