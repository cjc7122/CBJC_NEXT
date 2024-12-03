import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isPasswordSetup, setIsPasswordSetup] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Check if a password is already set up
  useEffect(() => {
    const checkPasswordSetup = async () => {
      try {
        const response = await fetch(`/api/check-password`);
        const data = await response.json();
        setIsPasswordSetup(data.isPasswordSet);
      } catch (error) {
        console.error('Error checking password setup:', error);
        setError('Unable to verify password setup.');
      }
    };

    checkPasswordSetup();
  }, []);

  if (!isOpen) return null;

  // Handle login if password is already set
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        onClose();
      } else {
        setError(data.error || 'Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again.');
    }
  };

  // Handle first-time password setup
  const handlePasswordSetup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/set-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Password set successfully!');
        setIsPasswordSetup(true); // Switch to login form
        setNewPassword(''); // Clear setup form
      } else {
        setError(data.error || 'Failed to set password. Please try again.');
      }
    } catch (error) {
      console.error('Error setting password:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleClose = () => {
    router.push('/'); // Redirect to home page
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isPasswordSetup ? 'Admin Login' : 'Set Up Admin Password'}</h2>
        {isPasswordSetup ? (
          <form className="form" onSubmit={handleLogin}>
            <label>
              Password:
              <input
                type="password"
                name="password"
                className="field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {error && <p className="error-message">{error}</p>}
            <div className="buttonHolder">
              <button onClick={handleClose} className="modal-button" type="button">
                Close
              </button>
              <button type="submit" className="modal-button">
                Login
              </button>
            </div>
          </form>
        ) : (
          <form className="form" onSubmit={handlePasswordSetup}>
            <label>
              New Password:
              <input
                type="password"
                name="newPassword"
                className="field"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </label>
            {error && <p className="error-message">{error}</p>}
            <div className="buttonHolder">
              <button onClick={onClose} className="modal-button" type="button">
                Close
              </button>
              <button type="submit" className="modal-button">
                Set Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
