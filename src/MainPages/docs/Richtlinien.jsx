import React from 'react';
import MainNavbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './styles.css'; // Import the CSS file

const Richtlinien = () => {
  return (
    <>
    <MainNavbar />
    <div className="terms-container">
      <h1>Richtlinien Tasker24 und Netzbedingungen</h1>
      <p><strong>1. Keine privaten Kontaktdaten:</strong> Mitarbeiter dürfen keine E-Mails, Telefonnummern oder Adressen austauschen. Jede Kommunikation soll ausschließlich über die Plattform laufen.</p>
      <p><strong>2. Verbot von privaten Absprachen:</strong> Mitarbeiter dürfen keine privaten Angebote (wie individuelle Preise oder Arbeiten außerhalb der Plattform) machen.</p>
      <p><strong>3. Kein Bargeld:</strong> Alle Zahlungen müssen digital und über die Plattform erfolgen.</p>
      <p><strong>Prozessablauf:</strong></p>
      <ul style={{ listStylePosition: 'inside' }}>
        <li>Mitarbeiteranmeldung: Mitarbeiter melden sich auf der Plattform an.</li>
        <li>Auftragserstellung: Kunden stellen Aufträge ein.</li>
        <li>Angebotsfunktion: Mitarbeiter können Angebote mit Preisvorschlägen senden.</li>
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default Richtlinien;