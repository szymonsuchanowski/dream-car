const formFieldsStep3 = [
    {
        name: 'car',
        label: 'car class',
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
            { value: 0, label: 'none (0)' },
            { value: 1, label: 'one (1)' },
            { value: 2, label: 'two (2)' },
            { value: 3, label: 'three (3)' },
            { value: 4, label: 'four (4)' },
        ],
    },
    {
        name: 'gps',
        label: 'GPS',
        type: 'checkbox',
    },
    {
        name: 'carWash',
        label: 'car wash',
        type: 'checkbox',
    },
];

export default formFieldsStep3;
