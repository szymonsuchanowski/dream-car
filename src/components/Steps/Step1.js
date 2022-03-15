import React from 'react';
import Input from '../Input';
import Error from '../Error';
import fields from '../../data/step1Data';

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
