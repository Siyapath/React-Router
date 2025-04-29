import React from 'react';
import Header from '../../../ass5/src/components/Header';
import Footer from '../../../ass5/src/components/Footer';

const ErrorView = () => {
  return (
    <div className="error-view">
      <Header />
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2>404 - Page Not Found</h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorView;
