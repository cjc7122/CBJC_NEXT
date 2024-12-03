import React, { useEffect, useState } from 'react';
import './OurTeam.css';  // Import the CSS for styling
import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";

const OurTeam = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('/api/get-employees');
        const data = await response.json();
        console.log(data);
        setEmployees(data.employees);
      } catch (err) {
        console.error('Error fetching employees:', err);
        setError('Unable to load employee data.');
      }
    };

    fetchEmployees();
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Team - Cain, Bourret, Jarry & Cressman LLC</title>
        <meta
          name="description"
          content="Meet the experienced team at Cain, Bourret, Jarry & Cressman LLC, including managing partners, founding partners, and our dedicated team of financial professionals."
        />
        <link rel="canonical" href="https://cbjv.com/firm/OurTeam" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>About Cain, Bourret, Jarry & Cressman LLC</h1>
            <hr />
            <h2>Helping Our Clients with Their Finances for Over 100 Years</h2>
          </div>
        </div>
        <div className="abouts-container">
          <div className="about-container">
            <div className="content">
              <p>At Cain, Bourret, Jarry & Cressman LLC, our dedication to delivering the highest standard of service sets us apart. We are committed to understanding your unique needs by listening carefully, asking insightful questions, and thoroughly assessing your goals and objectives. Our focus is on exceeding your expectations through exceptional service and genuine attention to detail.</p>
              <p>Our firm expertly balances the comprehensive capabilities of a larger organization with the attentive, individualized care of a small firm. </p>
              <p>We provide a full spectrum of tax, accounting, and financial services, supported by advanced technology. Our use of cutting-edge tax and accounting software, along with sophisticated online research tools, ensures accuracy and efficiency. </p>
              <p>With extensive experience and a rigorous commitment to continuing education, our team remains at the forefront of industry standards and best practices. </p>
            </div>
            <h1 className="partner_h1">Managing Partners</h1>

            <div className="abouts-postcards">
              <div className="abouts-postcard">
                <h2>Kristin Cressman, CPA, MST, Partner</h2>
                <p>Information about Partner 4 will go here. Include a short bio, key responsibilities, and personal information similar to the previous partners.</p>
                <p>Be sure to include key career highlights and personal touches like favorite quotes or where they reside.</p>
              </div>

              <div className="abouts-postcard">
                <h2>Kevin Jarry, CPA, MBA, MST, Partner</h2>
                <p>Information about Partner 3 will go here. Include a short bio, key responsibilities, and personal information similar to the previous partners.</p>
                <p>Be sure to include key career highlights and personal touches like favorite quotes or where they reside.</p>
              </div>
            </div>
            <h1 className="partner_h1">Founding Partners</h1>

            <div className="abouts-postcards">
              <div className="abouts-postcard">
                <h2>David A. Jarry, CPA, MST, Partner</h2>
                <p>David A. Jarry is a managing partner and the partner in charge of the firm’s Tax Division. He holds a Bachelor of Science in Accounting from Northeastern University and a Master’s of Science in Taxation from Bentley College.</p>
                <p>Mr. Jarry has over 35 years of accounting, tax, and consulting experience. He specializes in working with individuals and businesses, both closely held and commercial. As a Certified Public Accountant with a Masters in Taxation, David is well known as an area expert in tax planning, tax audits, and tax preparation.</p>
                <p>David prides himself on keeping up-to-date with the latest developments in tax law and using his knowledge to his clients&#39; benefit.</p>
                <p>Mr. Jarry resides with his wife, Sandra, in Dunstable, MA.</p>
              </div>

              <div className="abouts-postcard">
                <h2>Steven R. Bourret, CPA, CGMA, Partner</h2>
                <p>Steven R. Bourret is a managing partner and the partner in charge of the firm&#39;s Accounting and Auditing Services Division. He holds a Bachelor of Science degree in accounting from the University of Lowell. Steve has over 35 years of audit, tax, and consulting experience.</p>
                <p>Steve directs the firm&#39;s audit engagements for closely-held commercial businesses and not-for-profits. Steve believes in and takes a hands-on approach to all engagements and stresses partner involvement in order to provide superior service to his clients.</p>
                <p>Steve is a Certified Public Accountant (CPA) in Massachusetts and is also a member of the American Institute of Certified Public Accountants (AICPA).</p>
                <p><strong>Favorite quote:</strong> &#34;The years teach much the days never knew.&#34;</p>
                <p>Steve resides in Pelham, NH, with his wife Judy.</p>
              </div>
            </div>
            
            <h1>Our Team</h1>
            <div className="grid-holder">
              <div className="team-grid">
                {employees.length > 0 ? (
                  employees.map((employee, index) => (
                    <div className="team-member" key={index}>
                      <p>
                        <strong>{employee.Name}</strong>, <em>{employee.Title}</em>
                        <br />
                        <a href={`mailto:${employee.Email}`}>{employee.Email}</a>
                        {employee.Phone && (
                          <>
                            <br />
                            <span>{employee.Phone}</span>
                          </>
                        )}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>Loading team members...</p>
                )}
              </div>
            </div>
            <h2>Members of Our Team are in Good Standing With</h2>
            <ul className="affiliations">
              <li>American Society of Certified Public Accountants</li>
              <li>Massachusetts Society of Certified Public Accountants</li>
              <li>New Hampshire Society of Certified Public Accountants</li>
              <li>Massachusetts Board of Public Accountancy</li>
              <li>New Hampshire Board of Public Accountancy</li>
              <li>Massachusetts Notary Public</li>
            </ul>
          </div>
        </div>

    
        <Footer />
      </div>
    </>
  );
}

export default OurTeam;
