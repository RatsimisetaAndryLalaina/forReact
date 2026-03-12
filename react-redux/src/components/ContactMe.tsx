import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ContactMe: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const administrator: string = useSelector(({owner}: {owner: string}) => owner);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Email:', email);
    dispatch({ type: 'SET_GLOBAL_MESSAGE', payload: email });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <span>{administrator}</span>
        <div style={{ marginBottom: '15px' }}>
          <span>If you'd like to get in touch, please enter your email below:</span>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
