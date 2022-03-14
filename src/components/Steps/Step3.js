import React from 'react';
import Dropdown from '../Dropdown';
import Switch from '../Switch';
import fields from '../../data/step3Data';

const Step3 = () => {
    const renderFields = () =>
        fields.map((field) =>
            field.type === 'dropdown' ? (
                <Dropdown key={field.name} field={field} />
            ) : (
                <Switch key={field.name} field={field} />
            ),
        );

    return <div>{renderFields()}</div>;
};

export default Step3;
