import React from 'react';
import fields from '../../data/step1Data';
import Input from '../Input';
import Error from '../Error';

const Step1 = () => {
    const renderFields = () => fields.map((field) => <Input key={field.name} field={field} />);

    return (
        <div>
            {renderFields()}
            <Error isCenter />
        </div>
    );
};

export default Step1;
