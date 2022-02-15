import React from 'react';
import TextInput from '../TextInput';
import fields from '../../data/step1FieldsData';

const Step1 = () => {
    const renderFields = () => fields.map((field) => <TextInput key={field.name} field={field} />);

    return (
        <div>
            {renderFields()}
            <p>* required field</p>
        </div>
    );
};

export default Step1;
