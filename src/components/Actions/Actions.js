import React from 'react';

const Actions = ({ step, handleStepChange }) => (
    <div is1Col={step === 0 || 4}>
        {step !== 0 && (
            <button type="button" onClick={() => handleStepChange('prev')}>
                prev
            </button>
        )}
        <button type="button" onClick={() => handleStepChange('next')}>
            next
        </button>
    </div>
);

export default Actions;
