import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Login.css';
import api from '../utils/api';

function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [isDisabled, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const minCharacters = 6;
    const usernameMin = 3;
    if (
      email.includes('@') && email.includes('.com')
      && password.length >= minCharacters
      && confirm.length >= minCharacters
      && username.length >= usernameMin
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password, username, confirm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirm) {
        alert('Passwords do not match')
        return undefined;
      }
      const response = await api.post(
        '/user/signup',
        {
          email,
          username,
          password,
        }
      );
      alert(response.data.message)
      history.push('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="login-wrapper">
      <form
        className="login-form-wrapper"
        onSubmit={ handleSubmit }
      >
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          name="username"
          value={ username }
          onChange={ ({ target }) => setUsername(target.value) }
        />
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <input
          className="login-input"
          type="password"
          placeholder="Confirm password"
          name="confirm-password"
          value={ confirm }
          onChange={ ({ target }) => setConfirm(target.value) }
        />
        <button
          className="login-button"
          data-testid="login-submit-btn"
          disabled={ isDisabled }
        >
          Sign-up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
