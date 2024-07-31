import React, { useState } from 'react';
import PrescriptionUpload from './PrescriptionUpload';
import ValidationErrors from './ValidationErrors';

const Services = () => {
    const [prescriptionFile, setPrescriptionFile] = useState(null);
    const [validationErrors, setValidationErrors] = useState([]);

    const handleFileUpload = (file) => {
        setPrescriptionFile(file);
        validatePrescription(file);
    };

    const validatePrescription = (file) => {
        const errors = [];

        if (!file) {
            errors.push('Please upload a prescription file.');
        } else {
            const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
            const allowedTypes = ['application/pdf']; // Only allow PDFs

            if (file.size > maxSizeInBytes) {
                errors.push('File size exceeds the maximum limit of 5 MB.');
            }

            if (!allowedTypes.includes(file.type)) {
                errors.push('Invalid file type. Only PDF files are allowed.');
            }
        }

        setValidationErrors(errors);

        if (errors.length === 0) {
            alert('File uploaded successfully');
        }
    };

    return (
        <div>
            <h1>Prescription Upload</h1>
            <PrescriptionUpload onFileUpload={handleFileUpload} />
            <ValidationErrors errors={validationErrors} />
        </div>
    );
};

export default Services;
