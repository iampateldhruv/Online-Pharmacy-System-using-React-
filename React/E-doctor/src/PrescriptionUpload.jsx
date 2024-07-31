import React from 'react';

const PrescriptionUpload = ({ onFileUpload }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept=".pdf" />
        </div>
    );
};

export default PrescriptionUpload;
