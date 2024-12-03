import React, { useState } from 'react';

const PasswordChangeForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (newPassword !== confirmNewPassword) {
      setError('New passwords do not match.');
      return;
    }

    try {
      const response = await fetch(`/api/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentPassword, newPassword, confirmNewPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Password changed successfully.');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        setError(data.error || 'Failed to change password.');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleChangePassword} className="form-container">
      <h2>Change Password</h2>
      <label htmlFor="currentPassword">Current Password:</label>
      <input
        type="password"
        id="currentPassword"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        required
      />
      <label htmlFor="newPassword">New Password:</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <label htmlFor="confirmNewPassword">Confirm New Password:</label>
      <input
        type="password"
        id="confirmNewPassword"
        value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
        required
      />
      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}
      <button type="submit">Change Password</button>
    </form>
  );
};

export default PasswordChangeForm;
