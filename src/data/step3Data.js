const formFieldsStep3 = [
    {
        name: 'car',
        label: 'car class*',
        type: 'dropdown',
        items: [
            { value: 'A', label: 'A (e.g. Fiat 500)' },
            { value: 'B', label: 'B (e.g. VW Polo)' },
            { value: 'C', label: 'C (e.g. Seat Leon)' },
            { value: 'D', label: 'D (e.g. VW Passat)' },
            { value: 'P', label: 'P (e.g. Audi A8)' },
        ],
    },
    {
        name: 'childSeat',
        label: 'child seat',
        type: 'dropdown',
        items: [
            { value: 0, label: 'none' },
            { value: 1, label: 'one' },
            { value: 2, label: 'two' },
            { value: 3, label: 'three' },
            { value: 4, label: 'four' },
        ],
    },
    {
        name: 'gps',
        label: 'GPS navigation',
        type: 'checkbox',
    },
    {
        name: 'carWash',
        label: 'car cleaning',
        type: 'checkbox',
    },
];

export default formFieldsStep3;
