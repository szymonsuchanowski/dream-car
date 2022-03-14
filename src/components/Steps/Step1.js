import React from 'react';
import TextInput from '../TextInput';
import Error from '../Error';
import fields from '../../data/step1Data';

const Step1 = () => {
    const renderFields = () => fields.map((field) => <TextInput key={field.name} field={field} />);

    return (
        <div>
            {renderFields()}
            <Error />
        </div>
    );
};

export default Step1;
