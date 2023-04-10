import React, { useState } from 'react';
import './style.css';

export default () => {
  const [login, setLogin] = useState('');
  const [parol, setParol] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', login);
    console.log('Parol:', parol);
    setLogin('');
    setParol('');
  };

  return (
    <div className='login'>
      <div className='form'>
        <div className='form_title'>
          <p>Kirish Kundalik</p>
          <p>
            <a href='#'>Tizimda ro'yhatdan o'tmaganmisiz?</a>
          </p>
        </div>
        <div className='inputs'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='login'>Login</label> <br />
            <input
              value={login}
              id='login'
              name='login'
              onChange={(e) => setLogin(e.target.value)}
            />{' '}
            <br /> <br />
            <label htmlFor='parol'>Parol</label> <br />
            <input
              value={parol}
              onChange={(e) => setParol(e.target.value)}
              id='parol'
              name='parol'
            />{' '}
            <br />
            <button className='submit'>Tizimga kiring</button>
          </form>
        </div>
        <div className='form_footer'>
          <p>
            {' '}
            <span>❔</span> Login yoki parolni unutdingizmi?{' '}
            <a href='#'>Loginni tiklash</a>
          </p>
        </div>
      </div>
    </div>
  );
};
