import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PasswordChangeForm from '../components/PasswordChangeForm';
import Modal from '../components/Modal';
import './admin.css';
import '../app/globals.css';

function Admin() {
  const [announcement, setAnnouncement] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [employeeForm, setEmployeeForm] = useState({
    Name: '',
    Title: '',
    Email: '',
    Phone: '',
  });
  const [removeEmail, setRemoveEmail] = useState('');
  const [positionForm, setPositionForm] = useState({
    Title: '',
    Description: '',
    Requirements: '',
  });
  const [removeTitle, setRemoveTitle] = useState('');

  // Check if authToken exists in localStorage and validate it
  useEffect(() => {
    const checkAuthToken = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await fetch(`/api/protected`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (response.ok) {
            setIsAuthenticated(true); // Token is valid, allow access
          } else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error('Error verifying auth token:', error);
          localStorage.removeItem('authToken'); // Clean up on error
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false); // No token found
      }
    };

    checkAuthToken();
  }, []);

  const handleModalClose = () => {
    setIsAuthenticated(true);
  };

  // Fetch the current announcement to pre-fill the form
  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await fetch(`/api/get-announcement`);
        if (response.ok) {
          const data = await response.json();
          setAnnouncement(data.announcement || '');
        } else {
          console.error('Failed to fetch announcement');
        }
      } catch (error) {
        console.error('Error fetching announcement:', error);
      }
    };

    fetchAnnouncement();
  }, []);

  const handleChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`/api/update-announcement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ announcement }),
      });
  
      if (response.ok) {
        alert('Announcement updated successfully!');
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        alert(`Failed to update announcement: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error updating announcement:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Clear button function to remove the announcement
  const handleClear = async () => {
    try {
      const response = await fetch(`/api/update-announcement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ announcement: '' }), // Send an empty string to clear
      });
  
      if (response.ok) {
        alert('Announcement cleared successfully!');
        setAnnouncement(''); // Clear the local state as well
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        alert(`Failed to clear announcement: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error clearing announcement:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
  
    if (!pdfFile) {
      alert('Please select a PDF to upload.');
      return;
    }
  
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64File = reader.result.split(',')[1]; // Remove base64 prefix
  
      try {
        const response = await fetch(`/api/upload-pdf`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pdf: base64File, filename: pdfFile.name }),
        });
  
        if (response.ok) {
          const data = await response.json();
          alert(`PDF uploaded successfully: ${data.filename}`);
        } else {
          const errorData = await response.json();
          alert(`Failed to upload PDF: ${errorData.error}`);
        }
      } catch (error) {
        alert('An error occurred. Please try again.');
      }
    };
  
    reader.readAsDataURL(pdfFile);
  };
  
  const handleEmployeeFormChange = (e) => {
    const { name, value } = e.target;
    setEmployeeForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/add-employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeForm),
      });

      if (response.ok) {
        alert('Employee added successfully!');
        setEmployeeForm({ Name: '', Title: '', Email: '', Phone: '' }); // Clear form
      } else {
        const errorData = await response.json();
        alert(`Failed to add employee: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleRemoveEmployee = async (e) => {
    e.preventDefault();

    if (!removeEmail) {
      alert('Please enter the email of the employee to remove.');
      return;
    }

    try {
      const response = await fetch('/api/remove-employee', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: removeEmail }),
      });

      if (response.ok) {
        alert('Employee removed successfully!');
        setRemoveEmail(''); // Clear the form input
      } else {
        const errorData = await response.json();
        alert(`Failed to remove employee: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error removing employee:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handlePositionFormChange = (e) => {
    const { name, value } = e.target;
    setPositionForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddPosition = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/add-position', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(positionForm),
      });

      if (response.ok) {
        alert('Position added successfully!');
        setPositionForm({ Title: '', Description: '', Requirements: '' }); // Clear the form
      } else {
        const errorData = await response.json();
        alert(`Failed to add position: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error adding position:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleRemovePosition = async (e) => {
    e.preventDefault();

    if (!removeTitle) {
      alert('Please enter the title of the position to remove.');
      return;
    }

    try {
      const response = await fetch('/api/remove-position', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Title: removeTitle }),
      });

      if (response.ok) {
        alert('Position removed successfully!');
        setRemoveTitle(''); // Clear the form input
      } else {
        const errorData = await response.json();
        alert(`Failed to remove position: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error removing position:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="page-wrapper">
      <Header />
      {!isAuthenticated && (
        <Modal isOpen={!isAuthenticated} onClose={handleModalClose} />
      )}
      {isAuthenticated && (
        <main className="admin-content">
          <h1>Admin Panel</h1>
          <form onSubmit={handleSubmit} className="form-container">
            <label htmlFor="announcement">Edit Announcement:</label>
            <textarea
              id="announcement"
              value={announcement}
              onChange={handleChange}
              rows="4"
              cols="50"
              placeholder="Enter the new announcement text here"
            />
            <div className="buttonHolder">
              <button type="button" onClick={handleClear}>Clear Announcement</button>
              <button type="submit">Update Announcement</button>
            </div>
          </form>

          {/* New Add Employee Form */}
          <form onSubmit={handleAddEmployee} className="form-container">
            <h2>Add New Employee</h2>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="Name"
              value={employeeForm.Name}
              onChange={handleEmployeeFormChange}
              required
            />

            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="Title"
              value={employeeForm.Title}
              onChange={handleEmployeeFormChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="Email"
              value={employeeForm.Email}
              onChange={handleEmployeeFormChange}
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="Phone"
              value={employeeForm.Phone}
              onChange={handleEmployeeFormChange}
            />

            <button type="submit">Add Employee</button>
          </form>

          <form onSubmit={handleRemoveEmployee} className="form-container">
            <h2>Remove Employee</h2>
            <label htmlFor="remove-email">Employee Email:</label>
            <input
              type="email"
              id="remove-email"
              name="removeEmail"
              value={removeEmail}
              onChange={(e) => setRemoveEmail(e.target.value)}
              required
              placeholder="Enter employee's email"
            />
            <button type="submit">Remove Employee</button>
          </form>

          <form onSubmit={handleFileUpload} className="form-container">
            <label htmlFor="pdf">Upload New PDF:</label>
            <input
              type="file"
              id="pdf"
              accept="application/pdf"
              onChange={handleFileChange}
            />
            <button type="submit">Upload PDF</button>
          </form>

          <form onSubmit={handleAddPosition} className="form-container">
            <h2>Add New Position</h2>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="Title"
              value={positionForm.Title}
              onChange={handlePositionFormChange}
              required
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="Description"
              value={positionForm.Description}
              onChange={handlePositionFormChange}
              rows="4"
              required
            />
            <label htmlFor="requirements">Requirements:</label>
            <textarea
              id="requirements"
              name="Requirements"
              value={positionForm.Requirements}
              onChange={handlePositionFormChange}
              rows="4"
              required
            />
            <button type="submit">Add Position</button>
            </form>

            {/* Remove Position Form */}
            <form onSubmit={handleRemovePosition} className="form-container">
            <h2>Remove Position</h2>
            <label htmlFor="remove-title">Position Title:</label>
            <input
              type="text"
              id="remove-title"
              name="removeTitle"
              value={removeTitle}
              onChange={(e) => setRemoveTitle(e.target.value)}
              required
              placeholder="Enter position title to remove"
            />
            <button type="submit">Remove Position</button>
          </form>
          <PasswordChangeForm />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default Admin;
