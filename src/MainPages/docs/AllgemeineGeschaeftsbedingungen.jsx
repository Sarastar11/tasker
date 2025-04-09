import React from 'react';
import MainNavbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './styles.css'; // Import the CSS file

const AllgemeineGeschaeftsbedingungen = () => {
  return (
    <>
    <MainNavbar />
    <div className="terms-container">
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
      <p><strong>1. Geltungsbereich</strong></p>
      <p>1.1 Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge und Geschäftsbeziehungen zwischen Tasker24 (nachfolgend "Plattform" genannt) und ihren Nutzern.</p>
      <p><strong>2. Leistungen Tasker24</strong></p>
      <p>2.1 Tasker24 stellt eine Online-Plattform zur Verfügung, die als Vermittler zwischen Kunden und Dienstleistern fungiert.</p>
      <p><strong>3. Vertragsabschluss Tasker24</strong></p>
      <p>3.1 Die Nutzung der Plattform setzt eine Registrierung voraus.</p>
      <p><strong>Letzte Aktualisierung:</strong> 01.04.2025</p>
    </div>
    <Footer />
    </>
  );
};

export default AllgemeineGeschaeftsbedingungen;