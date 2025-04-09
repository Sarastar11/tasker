import React from 'react';
import MainNavbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './styles.css'; // Import the CSS file

const Guidelines = () => {
  return (
    <>
    <MainNavbar />
    <div className="terms-container">
      <h1>Tasker24 Guidelines and Network Conditions</h1>
      <p><strong>No Private Contact Information:</strong> Employees are not allowed to exchange emails, phone numbers, or addresses. All communication must be conducted exclusively through the platform.</p>
      <p><strong>No Private Agreements:</strong> Employees are prohibited from making private offers (such as individual pricing or work outside the platform) to ensure that all orders are processed officially through the platform.</p>
      <p><strong>No Cash Payments:</strong> All payments must be made digitally through the platform. Cash payments or direct billing are not allowed.</p>
      <p><strong>Automatic Monitoring:</strong> The platform is configured to automatically detect any use of unauthorized words or contact information. In the case of a violation, employees will be immediately blocked.</p>
      <p><strong>Process Flow</strong></p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Employee Registration: Employees register on the platform.</li>
        <li>Job Creation: Customers create job postings.</li>
        <li>Offer Function: Employees can send offers with price suggestions.</li>
        <li>Customer Selection: Customers view the offers and decide which one to accept.</li>
      </ul>
      <p><strong>Behavioral Rules and Consequences for Violations</strong></p>
      <p>Employees are required to work honestly and professionally. Any attempt at fraud, deliberate deception, or poor performance will not be tolerated. If we find that an employee is violating the rules or committing fraud, we will immediately report this to our lawyer. Legal consequences, including claims for damages and potential criminal charges, may follow.</p>
    </div>
    <Footer />
    </>
  );
};

export default Guidelines;