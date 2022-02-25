import React from 'react';
import DateInput from '../DateInput';
import fields from '../../data/step2Data';

const Step2 = () => {
    const renderFields = () => fields.map((field) => <DateInput key={field.name} field={field} />);

    return (
        <div>
            {renderFields()}
            <p>* required field</p>
        </div>
    );
};

export default Step2;
