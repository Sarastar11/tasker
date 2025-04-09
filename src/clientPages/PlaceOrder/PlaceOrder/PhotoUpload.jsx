import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";

export default function PhotoUpload({ onFilesSelected }) {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState("");
    const dropRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        validateAndSetFiles(selectedFiles);
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
        const droppedFiles = Array.from(e.dataTransfer.files);
        validateAndSetFiles(droppedFiles);
    };

    // Validate Images (Max 5MB, Only Images, Multiple Allowed)
    const validateAndSetFiles = (selectedFiles) => {
        const validTypes = ["image/png", "image/jpeg", "image/jpg"];
        let validFiles = [];
        let errorMsg = "";

        selectedFiles.forEach((file) => {
            if (!validTypes.includes(file.type)) {
                errorMsg = "Only PNG, JPG images are allowed.";
            } else if (file.size > 5 * 1024 * 1024) {
                errorMsg = "File size must be less than 5MB.";
            } else {
                validFiles.push(file);
            }
        });

        if (errorMsg) {
            setError(errorMsg);
        } else {
            setFiles([...files, ...validFiles]);
            setError("");
            if (onFilesSelected) {
                onFilesSelected([...files, ...validFiles]); // Pass files to parent component
            }
        }
    };

    // Remove Image
    const removeImage = (index) => {
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        if (onFilesSelected) {
            onFilesSelected(newFiles); // Update parent component
        }
    };

    return (
        <div className="w-100 mt-4" style={{ maxWidth: "674px" }}>
            <span>Add Photos</span>
            {/* Drag & Drop Upload Section */}
            <div
                ref={dropRef}
                className="mt-3 p-4 rounded text-center d-flex flex-column align-items-center justify-content-center"
                style={{
                    border: "1px dashed rgba(161, 167, 196, 1)",
                    backgroundColor: "#f9f9f9",
                    cursor: "pointer",
                }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    id="fileUpload"
                    className="d-none"
                    accept=".png,.jpg,.jpeg"
                    multiple
                    onChange={handleFileChange}
                />
                <label htmlFor="fileUpload" className="btn btn-outline-success">Upload Images</label>
                <p className="small text-muted mt-2">Or drag and drop images</p>

                {/* Show error message if validation fails */}
                {error && <p className="text-danger small">{error}</p>}
                {/* Image Preview Gallery */}
                {files.length > 0 && (
                    <div className="mt-3 d-flex flex-wrap gap-3">
                        {files.map((file, index) => (
                            <div key={index} className="position-relative">
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="Preview"
                                    width="100"
                                    className="rounded border"
                                />
                                <Button
                                    variant="danger"
                                    size="sm"
                                    className="position-absolute top-0 end-0"
                                    onClick={() => removeImage(index)}
                                >
                                    ✖
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
