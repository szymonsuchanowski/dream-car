import React from 'react';
import fields from '../../data/step3Data';
import Dropdown from '../Dropdown';
import CheckboxBox from '../CheckboxBox';
import Error from '../Error';

const Step3 = () => {
    const renderFields = () =>
        fields.map((field) =>
            field.type === 'dropdown' ? (
                <Dropdown key={field.name} field={field} />
            ) : (
                <CheckboxBox key={field.name} field={field} />
            ),
        );

    return (
        <div>
            {renderFields()}
            <Error isCenter />
        </div>
    );
};

export default Step3;
