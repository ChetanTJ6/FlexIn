import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    left: '0',
    bottom: '0',
    width: '100%',
  };

  const linkStyle = {
    color: '#61dafb',
    textDecoration: 'none',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 FlexIn. All rights reserved.</p>
      <p>
        Follow us on 
        <a href="https://twitter.com" style={linkStyle}> Twitter</a>, 
        <a href="https://facebook.com" style={linkStyle}> Facebook</a>, and 
        <a href="https://instagram.com" style={linkStyle}> Instagram</a>.
      </p>
    </footer>
  );
}

export default Footer;
