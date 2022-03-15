const rentalData = {
    minRentalLengthHours: 4,
    minStartDifferenceHours: 2,
    priceList: {
        car: {
            A: {
                prices: [
                    { min: 1, max: 3, price: 99 },
                    { min: 4, max: 20, price: 89 },
                    { min: 21, max: 60, price: 79 },
                    { min: 61, max: Infinity, price: 65 },
                ],
                deposit: 500,
            },
            B: {
                prices: [
                    { min: 1, max: 3, price: 109 },
                    { min: 4, max: 20, price: 99 },
                    { min: 21, max: 60, price: 89 },
                    { min: 61, max: Infinity, price: 75 },
                ],
                deposit: 700,
            },
            C: {
                prices: [
                    { min: 1, max: 3, price: 149 },
                    { min: 4, max: 20, price: 139 },
                    { min: 21, max: 60, price: 119 },
                    { min: 61, max: Infinity, price: 105 },
                ],
                deposit: 1000,
            },
            D: {
                prices: [
                    { min: 1, max: 3, price: 199 },
                    { min: 4, max: 20, price: 179 },
                    { min: 21, max: 60, price: 159 },
                    { min: 61, max: Infinity, price: 145 },
                ],
                deposit: 1000,
            },
            P: {
                prices: [
                    { min: 1, max: 3, price: 349 },
                    { min: 4, max: 20, price: 299 },
                    { min: 21, max: 60, price: 279 },
                    { min: 61, max: Infinity, price: 225 },
                ],
                deposit: 2500,
            },
        },
        childSeat: {
            dayPrice: 5,
            maxPrice: 50,
        },
        gps: {
            dayPrice: 5,
            maxPrice: 50,
        },
        carWash: { price: 40 },
    },
};

export default rentalData;
