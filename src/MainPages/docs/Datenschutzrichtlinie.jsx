import React from 'react';
import MainNavbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './styles.css'; // Import the CSS file
const Datenschutzrichtlinie = () => {
  return (
    <>
    <MainNavbar />
    <div className="terms-container">
      <h1>Datenschutzrichtlinie für Taskar24</h1>
      <p><strong>1. Einführung</strong></p>
      <p>Wir bei Taskar24 legen großen Wert auf den Schutz Ihrer persönlichen Daten. In dieser Datenschutzrichtlinie erfahren Sie, welche Daten wir erheben, wie wir sie verarbeiten und welche Rechte Ihnen zustehen. Unsere Plattform erfüllt die Anforderungen der Datenschutz-Grundverordnung (DSGVO) sowie anderer anwendbarer Datenschutzgesetze.</p>
      <p><strong>2. Welche Daten wir erheben</strong></p>
      <p><strong>Kundendaten:</strong></p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Vor- und Nachname</li>
        <li>E-Mail-Adresse</li>
        <li>Telefonnummer</li>
        <li>Adresse (falls für die Bestellung erforderlich)</li>
      </ul>
      <p><strong>Mitarbeiterdaten:</strong></p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Vor- und Nachname</li>
        <li>E-Mail-Adresse</li>
        <li>Telefonnummer</li>
        <li>Wohnort und Stadt</li>
        <li>Sprachkenntnisse und -fertigkeiten</li>
        <li>Beschreibung und Preise der angebotenen Leistungen</li>
        <li>Bewertungen anderer Nutzer</li>
      </ul>
      <p><strong>3. Wofür wir Ihre Daten verwenden</strong></p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Zur Bereitstellung und Vermittlung von Dienstleistungen zwischen Kunden und Mitarbeitern</li>
        <li>Zur Erfüllung vertraglicher Verpflichtungen</li>
        <li>Zur Kommunikation (z. B. Updates, Bestelldetails)</li>
      </ul>
      <p><strong>17. Kontakt</strong></p>
      <p>E-Mail: kontakt@taskar24.de</p>
      <p>Website: www.Taskar24.de</p>
    </div>
    <Footer />
    </>
  );
};

export default Datenschutzrichtlinie;