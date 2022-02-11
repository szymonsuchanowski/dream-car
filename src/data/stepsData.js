const stepsData = [
    {
        name: 'Welcome',
        subtitle: "dont't wait!",
        actions: [{ txt: 'Start!', type: 'next' }],
    },
    {
        name: 'Step1',
        label: 'personal info',
        subtitle: 'your data',
        actions: [
            { txt: 'back', type: 'prev' },
            { txt: 'next', type: 'next' },
        ],
    },
    {
        name: 'Step2',
        label: 'rental info',
        subtitle: 'rental information',
        actions: [
            { txt: 'back', type: 'prev' },
            { txt: 'next', type: 'next' },
        ],
    },
    {
        name: 'Step3',
        label: 'car info',
        subtitle: 'car & equipment',
        actions: [
            { txt: 'back', type: 'prev' },
            { txt: 'submit', type: 'next' },
        ],
    },
    {
        name: 'Success',
        label: 'success!',
        subtitle: 'rental summary',
    },
];

export default stepsData;
