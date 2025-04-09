import React, { useState } from "react";
import { Form, InputGroup, Modal, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import location from '../../assets/icons/location.png';
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker issue
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const markerIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function LocationAdress() {
  const [address, setAddress] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [markerPosition, setMarkerPosition] = useState([51.505, -0.09]); // Default to London

  // Handle map click event
  function LocationMarker() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat, lng]);
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
          .then((res) => res.json())
          .then((data) => {
            setAddress(data.display_name);
          })
          .catch((err) => console.error("Error fetching address:", err));
      }
    });

    return markerPosition ? <Marker position={markerPosition} icon={markerIcon} /> : null;
  }

  return (
    <>
      <Form.Group className="mb-3 mt-4" controlId="formAddress" style={{ maxWidth: "674px" }}>
  <Form.Label>Address</Form.Label>
  <InputGroup >
    <Form.Control type="text" placeholder="Input Text" value={address} readOnly />
    <InputGroup.Text
      className="bg-white border-start-0"
      style={{ cursor: "pointer" }}
      onClick={() => setShowMap(true)}
    >
      <img src={location} alt="location" width={24} />
    </InputGroup.Text>
  </InputGroup>
</Form.Group>

{/* map modal................................................... */}
<Modal show={showMap} onHide={() => setShowMap(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Location</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "60vh" }}>
          <MapContainer center={markerPosition} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationMarker />
          </MapContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMap(false)}>Close</Button>
          <Button variant="success" onClick={() => setShowMap(false)}>Select</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
