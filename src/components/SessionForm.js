import React, { useState, useEffect } from 'react';

const SessionForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
    alert('Data saved in session storage');
  };

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save to Session</button>
      </form>
    </div>
  );
};

export default SessionForm;
