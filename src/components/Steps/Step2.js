import React, { useContext } from 'react';
import DateInput from '../DateInput';
import fields from '../../data/step2Data';
import formContext from '../../context/formContext';

const Step2 = () => {
    const formHandler = useContext(formContext);
    const renderFields = () => fields.map((field) => <DateInput key={field.name} field={field} />);

    return (
        <div>
            {renderFields()}
            {formHandler.dateErr && <p>date err</p>}
        </div>
    );
};

export default Step2;
