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
        <title>Our Team | CPA Firm Dracut MA | Cain, Bourret, Jarry & Cressman LLC</title>
        <meta
          name="description"
          content="Meet the CPAs and financial professionals at Cain, Bourret, Jarry & Cressman LLC in Dracut, MA. Serving the Merrimack Valley for over 30 years with personalized tax, accounting, and advisory services."
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
              <p>At Cain, Bourret, Jarry &amp; Cressman LLC, we combine the depth and capability of a larger firm with the personal relationships that only a close-knit practice can offer. We listen first, ask the right questions, and build strategies around what actually matters to you.</p>
              <p>With decades of experience and a commitment to continuous education, our team stays at the forefront of tax law, accounting standards, and financial strategy &mdash; so you always have current, reliable guidance.</p>
              <p>We serve individuals, families, and businesses across the Merrimack Valley from our offices in Dracut, MA and Londonderry, NH &mdash; and we&#39;re available year-round, not just at tax time.</p>
            </div>
            <h1 className="partner_h1">Managing Partners</h1>

            <div className="abouts-postcards">
              <div className="abouts-postcard">
                <h2>Kristin M. Cressman, CPA, MST, Partner</h2>
                <p>Kristin M. Cressman is a managing partner at the firm and plays a central role in overseeing client relationships and tax strategy. She is a Certified Public Accountant licensed in multiple states and holds a Master of Science in Taxation from Bentley University.</p>
                <p>Kristin has extensive experience in accounting, tax planning, and consulting services, working closely with both individuals and businesses. She is known for providing personalized, hands-on service and building long-term client relationships tailored to each client&#39;s financial goals.</p>
                <p>As a CPA with advanced specialization in taxation, Kristin stays current with evolving tax laws and applies that knowledge to deliver practical and effective solutions for her clients.</p>
                <p>Kristin resides in Westford, Massachusetts.</p>
              </div>

              <div className="abouts-postcard">
                <h2>Kevin T. Jarry, CPA, MBA, MST, Partner</h2>
                <p>Kevin T. Jarry is a managing partner at the firm with a focus on tax and advisory services. He is a Certified Public Accountant and holds both a Master of Business Administration (MBA) and a Master of Science in Taxation (MST).</p>
                <p>Kevin works with individuals and businesses on a wide range of accounting and tax matters, including tax planning, compliance, and business consulting. His combined background in business administration and taxation allows him to provide both strategic and technical guidance to clients.</p>
                <p>Based in Massachusetts, Kevin brings a practical, client-focused approach to helping businesses and individuals navigate complex financial and tax environments.</p>
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
