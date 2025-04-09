import React from 'react';
import MainNavbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './styles.css'; // Import the CSS file

const GeneralTermsAndConditions = () => {
  return (
    <>
    <MainNavbar />
    <div className="terms-container">
      <h1>General Terms and Conditions (GTC)</h1>
      <p><strong>Scope of Application</strong></p>
      <p>1.1 These General Terms and Conditions (GTC) apply to all contracts and business relationships between Tasker24 (hereinafter referred to as "Platform") and its users (hereinafter referred to as "Customers" or "Service Providers") mediated through the platform.</p>
      <p>1.2 Deviating conditions of the users are not recognized unless Tasker24 has explicitly agreed to them in writing.</p>
      <p><strong>Services of Tasker24</strong></p>
      <p>2.1 Tasker24 provides an online platform that acts as an intermediary between customers and service providers.</p>
      <p>2.2 Tasker24 is not a contractual party in the contracts mediated through the platform. All agreements regarding services are made exclusively between the customer and the respective service provider.</p>
      <p>2.3 Tasker24 does not provide direct customer support for services rendered and takes no responsibility for the quality or execution of the mediated services.</p>
      <p><strong>Contract Conclusion with Tasker24</strong></p>
      <p>3.1 Using the platform requires registration. The user is obligated to provide truthful information and keep their data up to date.</p>
      <p>3.2 Registration can also be done via an existing Google account.</p>
      <p>3.3 Tasker24 reserves the right to block or delete user accounts if incorrect information has been provided or if there are violations of these GTC.</p>
    </div>
    <Footer />
    </>
  );
};

export default GeneralTermsAndConditions;