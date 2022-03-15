const stepsData = [
    {
        name: 'Welcome',
        title: 'reservation form',
        actions: [{ txt: 'start', type: 'next' }],
    },
    {
        name: 'Step1',
        label: 'personal',
        title: 'your data',
        actions: [
            { txt: 'back', type: 'prev' },
            { txt: 'next', type: 'next' },
        ],
    },
    {
        name: 'Step2',
        label: 'rental',
        title: 'rental information',
        actions: [
            { txt: 'back', type: 'prev' },
            { txt: 'next', type: 'next' },
        ],
    },
    {
        name: 'Step3',
        label: 'car',
        title: 'car & equipment',
        actions: [
            { txt: 'back', type: 'prev' },
            { txt: 'submit', type: 'submit' },
        ],
    },
    {
        name: 'Success',
        label: 'summary',
        title: 'inquiry summary',
    },
];

export default stepsData;
