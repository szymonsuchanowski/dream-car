import React, { useContext } from 'react';
import Input from '../Input';
import Error from '../Error';
import fields from '../../data/step2Data';
import formContext from '../../context/formContext';
import rentalData from '../../data/rentalData';

const Step2 = () => {
    const formHandler = useContext(formContext);

    const { minRentalLengthHours, minStartDifferenceHours } = rentalData;

    const renderFields = () => fields.map((field) => <Input key={field.name} field={field} />);

    return (
        <div>
            {renderFields()}
            <Error isCenter>
                {formHandler.dateErr
                    ? `verify date range (min. rental length ${minRentalLengthHours}h, rental start at least ${minStartDifferenceHours}h from now)`
                    : null}
            </Error>
        </div>
    );
};

export default Step2;
