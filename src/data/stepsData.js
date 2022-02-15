const stepsData = [
    {
        name: 'Welcome',
        title: "dont't wait!",
        actions: [{ txt: 'Start!', type: 'next' }],
    },
    {
        name: 'Step1',
        label: 'personal info',
        title: 'your data',
        actions: [
            { txt: 'back', type: 'prev' },
            { txt: 'next', type: 'next' },
        ],
    },
    {
        name: 'Step2',
        label: 'rental info',
        title: 'rental information',
        actions: [
            { txt: 'back', type: 'prev' },
            { txt: 'next', type: 'next' },
        ],
    },
    {
        name: 'Step3',
        label: 'car info',
        title: 'car & equipment',
        actions: [
            { txt: 'back', type: 'prev' },
            { txt: 'submit!', type: 'submit' },
        ],
    },
    {
        name: 'Success',
        label: 'success!',
        title: 'rental summary',
    },
];

export default stepsData;
