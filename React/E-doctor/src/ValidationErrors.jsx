import React from 'react';

const ValidationErrors = ({ errors }) => {
    if (!errors || errors.length === 0) {
        return null;
    }

    return (
        <div>
            {errors.map((error, index) => (
                <p key={index} style={{ color: 'red' }}>{error}</p>
            ))}
        </div>
    );
};

export default ValidationErrors;
