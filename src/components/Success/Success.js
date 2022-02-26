import React, { useContext } from 'react';
import SummaryCreator from '../../helpers/SummaryCreator';
import formContext from '../../context/formContext';

const Success = () => {
    const formHandler = useContext(formContext);

    const renderSummaryItems = (items) =>
        items.map((item) => {
            const { label, value } = item;
            return (
                <li key={value}>
                    <span>{label}</span>
                    <span>{value}</span>
                </li>
            );
        });

    const renderSummary = () => {
        const { name, email, summaryItemsList } = SummaryCreator(formHandler.formState);
        return (
            <div>
                <p>
                    {name}, thank you for submitting your inquiry. We sent the confirmation to the
                    following e-mail address: {email}. We will contact you soon.
                </p>
                <p>Summary below.</p>
                <ul>{renderSummaryItems(summaryItemsList)}</ul>
            </div>
        );
    };

    return <div>{renderSummary()}</div>;
};

export default Success;
