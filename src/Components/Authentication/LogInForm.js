import React, { useState } from 'react';

function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call login function with email and password
    console.log('Logging in with email:', email, 'and password:', password);
  };

  return (
  <div className="login_form">
  <h2>Login Form </h2>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
  );
}

export default LogInForm;
