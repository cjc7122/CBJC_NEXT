import React, { useState, useEffect } from 'react';
import './Careers.css'; // Import the CSS for styling
import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';

const Careers = () => {
  const [positions, setPositions] = useState([]); // State to store positions
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors
  const [selectedPosition, setSelectedPosition] = useState(null); // Track selected position
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [application, setApplication] = useState({
    name: '',
    email: '',
    resume: null,
    blurb: '',
  });

  // Fetch positions on component mount
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch('/api/get-positions');
        if (response.ok) {
          const data = await response.json();
          setPositions(data.positions);
        } else {
          throw new Error('Failed to fetch positions');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  const openModal = (position) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setApplication({
      name: '',
      email: '',
      resume: null,
      blurb: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplication((prev) => ({ ...prev, [name]: value }));
  };

  const handleResumeChange = (e) => {
    setApplication((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', application.name);
    formData.append('email', application.email);
    formData.append('resume', application.resume);
    formData.append('blurb', application.blurb);
    formData.append('position', selectedPosition.Title);

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        closeModal();
      } else {
        alert('Failed to submit application.');
      }
    } catch (err) {
      console.error('Error submitting application:', err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Team at Cain, Bourret, Jarry & Cressman LLC</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Cain, Bourret, Jarry & Cressman LLC. Apply for open positions in accounting, auditing, tax planning, and more."
        />
        <link rel="canonical" href="https://cbjv.com/contact/Careers" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        <div className="background-section">
          <div className="overlay">
            <h1>Careers</h1>
            <hr />
            <h2>We would love to hear from you!</h2>
          </div>
        </div>
        <div className="CareersContainer">
          <h1>Open Positions</h1>
          <div className="CareerContainer">
            {loading && <p>Loading positions...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && positions.length === 0 && <p>No positions available at the moment.</p>}
            {!loading &&
              positions.map((position, index) => (
                <div className="CareerCard" key={index}>
                  <h3>{position.Title}</h3>
                  <p>
                    <strong>Description:</strong> {position.Description}
                  </p>
                  <p>
                    <strong>Requirements:</strong> {position.Requirements}
                  </p>
                  <button onClick={() => openModal(position)}>Apply Now</button>
                </div>
              ))}
          </div>
        </div>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Apply for {selectedPosition?.Title}</h2>
              <form onSubmit={handleSubmitApplication} className="application-form">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={application.name}
                  onChange={handleInputChange}
                  required
                />

                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={application.email}
                  onChange={handleInputChange}
                  required
                />

                <label htmlFor="resume">Upload Resume:</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  required
                />

                <label htmlFor="blurb">Tell us about yourself:</label>
                <textarea
                  id="blurb"
                  name="blurb"
                  value={application.blurb}
                  onChange={handleInputChange}
                  rows="4"
                  required
                ></textarea>

                <div className="modal-buttons">
                  <button type="button" onClick={closeModal}>
                    Cancel
                  </button>
                  <button type="submit">Submit Application</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Careers;
