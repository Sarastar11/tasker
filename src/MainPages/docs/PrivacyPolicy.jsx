import React from 'react';
import MainNavbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './styles.css'; // Import the CSS file

const PrivacyPolicy = () => {
  return (
    <>
    <MainNavbar />
    <div className="terms-container">
      <h1>Privacy Policy for Taskar24</h1>
      <p><strong>Introduction</strong> At Taskar24, we place great importance on the protection of your personal data. This privacy policy outlines the data we collect, how we process it, and the rights you are entitled to. Our platform complies with the requirements of the General Data Protection Regulation (GDPR) and other applicable data protection laws. We process your personal data through the Taskar24 website, app, and all other services referring to this privacy policy.</p>
      <p><strong>What Data We Collect</strong> We only collect personal data to the extent necessary for providing and improving our services. This includes:</p>
      <p><strong>Customer Data:</strong></p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>First and last name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Address (if required for the order)</li>
      </ul>
      <p><strong>Employee Data:</strong></p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>First and last name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Residence and city</li>
        <li>Language skills and proficiency</li>
        <li>Description and pricing of the offered services</li>
        <li>Reviews from other users</li>
      </ul>
      <p><strong>Additional Verification Data:</strong></p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Identity verification: We collect a copy of your ID and a selfie for verification purposes only. This data will be used solely for verification and deleted afterward.</li>
      </ul>
      <p><strong>Technical Data:</strong></p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>IP address</li>
        <li>Device information (browser type, operating system)</li>
        <li>Cookies (see section 6)</li>
      </ul>
      <p><strong>How We Use Your Data</strong> We process personal data exclusively for the following purposes:</p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>To provide and mediate services between customers and employees</li>
        <li>To fulfill contractual obligations</li>
        <li>To communicate (e.g., updates, order details)</li>
        <li>To improve our platform and services</li>
        <li>To comply with legal requirements</li>
      </ul>
      <p><strong>Data Storage and Deletion</strong> We store your personal data only as long as necessary to fulfill contractual or legal obligations:</p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Contract-related Data: Stored while using our platform; unnecessary data will be deleted after the contract ends.</li>
        <li>Deletion Upon Request: You can request the deletion of your data at any time, unless there are legal obligations preventing it.</li>
        <li>Retention Obligations: Certain data (e.g., invoices, tax data) must be retained according to legal regulations for up to ten years.</li>
        <li>Data Deletion: Once the data is no longer needed for the above purposes, it will be securely deleted or anonymized.</li>
      </ul>
      <p><strong>Rights of Users</strong> According to the GDPR, you have the following rights:</p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Right to Access: You can request an overview of your stored data.</li>
        <li>Right to Rectification: Incorrect or incomplete data can be corrected.</li>
        <li>Right to Deletion: You can request the deletion of your data, unless there are legal retention obligations.</li>
        <li>Right to Object: You can object to the processing of your data if it is based on legitimate interest.</li>
        <li>Right to Data Portability: Your data can be provided in a structured, commonly used format.</li>
      </ul>
      <p><strong>Cookies and Tracking</strong> Our website uses cookies to enhance the user experience:</p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Necessary Cookies: Required for the operation of the platform.</li>
        <li>Functional Cookies: Store preferences such as language settings.</li>
        <li>Analytical Cookies: Help us improve the platform. You can disable cookies in your browser settings, but this may limit the functionality of the website.</li>
      </ul>
      <p><strong>Contact</strong> If you have any questions regarding this privacy policy or wish to exercise your rights, you can contact us at any time via email or through our contact form:</p>
      <p>Email: kontakt@taskar24.de</p>
      <p>Website: www.Taskar24.de</p>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;