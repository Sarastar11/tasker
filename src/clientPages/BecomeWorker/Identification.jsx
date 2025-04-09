import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";

const Identification = () => {
  const [selectedOption, setSelectedOption] = useState("passport");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");  
  const dropRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    validateAndSetFile(selectedFile);
  };

  // Drag & Drop Events
  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current.style.borderColor = "#28a745"; // Highlight on drag
  };

  const handleDragLeave = () => {
    dropRef.current.style.borderColor = "rgba(161, 167, 196, 1)"; // Reset border
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dropRef.current.style.borderColor = "rgba(161, 167, 196, 1)"; // Reset border
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  // File Validation (max 5MB, only images & PDFs)
  const validateAndSetFile = (file) => {
    if (!file) return;

    const validTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];
    if (!validTypes.includes(file.type)) {
      setError("Only PNG, JPG, and PDF files are allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB.");
      return;
    }

    setFile(file);
    setError("");
  };

  return (
    <div className="p-3">
      {/* Identity Information */}
      <Form.Group>
        <Form.Label className="mt-5 mb-4">Identify Information *</Form.Label>
        <div className="d-flex gap-5">
          <Form.Check
          style={{marginRight: 210}}
            type="radio"
            label="Passport"
            name="identityType"
            value="passport"
            checked={selectedOption === "passport"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Identify"
            name="identityType"
            value="identify"
            checked={selectedOption === "identify"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
        </div>
      </Form.Group>

      {/* Drag & Drop Upload Section */}
      <div
        ref={dropRef}
        className="mt-3 p-4 rounded text-center d-flex flex-column align-items-center justify-content-center"
        style={{
          border: "1px dashed rgba(161, 167, 196, 1)",
        
          cursor: "pointer"
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileUpload"
          className="d-none"
          accept=".png,.jpg,.jpeg,.pdf"
          onChange={handleFileChange}
        />
        <label htmlFor="fileUpload" className="btn btn-outline-success">
          Upload
        </label>
        <p className="small text-muted mt-2">Or drag and drop files</p>

        {/* Show error message if validation fails */}
        {error && <p className="text-danger small">{error}</p>}

        {/* Show selected file name & preview */}
        {file && (
          <div className="mt-3">
            {file.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                width="100"
                className="rounded border mt-2"
              />
            ) : (
              <p className="text-success small">{file.name}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Identification;
