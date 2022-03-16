import {
    convertArrToObj,
    countHoursDifference,
    countTime,
    getInputsNames,
    prepareSummaryItemsList,
} from './helpersFunctions';
import rentalData from '../data/rentalData';
import formFieldsStep1 from '../data/step1Data';
import formFieldsStep2 from '../data/step2Data';
import formFieldsStep3 from '../data/step3Data';

const SummaryCreator = (dataToFilter) => {
    const getEnteredValues = () => {
        const fields = formFieldsStep1.concat(formFieldsStep2, formFieldsStep3);
        const fieldsNamesList = getInputsNames(fields);
        const enteredValuesList = fieldsNamesList.map((fieldName) => {
            const { value: fieldValue } = dataToFilter[fieldName];
            return {
                [fieldName]: fieldValue,
            };
        });
        return convertArrToObj(enteredValuesList);
    };

    const setDateInfo = ({ startDate, startTime, endDate, endTime }) => {
        const start = countTime(startDate, startTime);
        const end = countTime(endDate, endTime);
        const hoursDifference = countHoursDifference(start, end);
        return { days: Math.ceil(hoursDifference / 24), startDate, startTime, endDate, endTime };
    };

    const getPricesInfo = (priceListPosition) => rentalData.priceList[priceListPosition];

    const setCarInfo = ({ car: carClass }, days) => {
        const { deposit, prices } = getPricesInfo('car')[carClass];
        const priceRange = prices.find(({ min, max }) => days >= min && days <= max);
        const { price } = priceRange;
        return { carClass, price, deposit };
    };

    const setChildSeatInfo = ({ childSeat: seatNum }, days) => {
        if (!seatNum) {
            return { seatNum: 0, seatPrice: 0 };
        }
        const { dayPrice, maxPrice } = getPricesInfo('childSeat');
        const childSeatPriceCounted = dayPrice * days * seatNum;
        const maxChildSeatPrice = maxPrice * seatNum;
        const seatPrice =
            childSeatPriceCounted <= maxChildSeatPrice ? childSeatPriceCounted : maxChildSeatPrice;
        return { seatNum, seatPrice };
    };

    const setGpsInfo = ({ gps }, days) => {
        if (!gps) {
            return 0;
        }
        const { dayPrice, maxPrice } = getPricesInfo('gps');
        const gpsPriceCounted = dayPrice * days;
        return gpsPriceCounted <= maxPrice ? gpsPriceCounted : maxPrice;
    };

    const setCarWashInfo = ({ carWash }) => {
        const { price: carWashPrice } = getPricesInfo('carWash');
        return carWash ? carWashPrice : 0;
    };

    const countTotalPrice = (days, { price }, { seatPrice }, gpsPrice, carWashPrice) =>
        days * price + seatPrice + gpsPrice + carWashPrice;

    const getNeededData = (enteredData) => {
        const dateInfo = setDateInfo(enteredData);
        const { days } = dateInfo;
        const carInfo = setCarInfo(enteredData, days);
        const childSeatInfo = setChildSeatInfo(enteredData, days);
        const gpsInfo = setGpsInfo(enteredData, days);
        const carWashInfo = setCarWashInfo(enteredData);
        const totalPrice = countTotalPrice(days, carInfo, childSeatInfo, gpsInfo, carWashInfo);
        const { name, email } = enteredData;
        const summaryItemsList = prepareSummaryItemsList({
            ...dateInfo,
            ...carInfo,
            ...childSeatInfo,
            gpsInfo,
            carWashInfo,
            totalPrice,
        });
        return { name, email, summaryItemsList };
    };

    const prepareDataToShow = () => {
        const enteredData = getEnteredValues();
        return getNeededData(enteredData);
    };

    return prepareDataToShow();
};

export default SummaryCreator;
