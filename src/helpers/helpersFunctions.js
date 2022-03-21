import stepsData from '../data/stepsData';
import formFieldsStep1 from '../data/step1Data';
import formFieldsStep2 from '../data/step2Data';
import formFieldsStep3 from '../data/step3Data';

export const getStepsData = (step, dataToGet) => {
    const stepData = stepsData[step];
    return stepData[dataToGet];
};

export const convertArrToObj = (arr) => Object.assign({}, ...arr);

export const createStateData = () => {
    const fields = formFieldsStep1.concat(formFieldsStep2, formFieldsStep3);

    return fields.map((field) => {
        const { name, type } = field;
        return {
            [name]: {
                value: type === 'checkbox' ? false : '',
                isValid: false,
                isFill: false,
            },
        };
    });
};

export const createInitStateObj = () => convertArrToObj(createStateData());

export const getInputsNames = (fields) => fields.map((field) => field.name);

export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

const getCurrentDate = () => {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    return new Date(Date.now() - timezoneOffset).toISOString().slice(0, 10);
};

export const setDateRange = (type) => (type === 'date' ? getCurrentDate() : null);

export const isDateFieldDisabled = (name, formState) => {
    if (name === 'endTime' || name === 'endDate') {
        const {
            startDate: { isValid: isStartDateValid },
            startTime: { isValid: isStartTimeValid },
        } = formState;
        return !(isStartDateValid && isStartTimeValid);
    }
    return false;
};

export const countTime = (date, time) => {
    const [year, month, day] = date.split('-');
    return new Date(`${month}/${day}/${year} ${time}:00`).getTime();
};

export const countHoursDifference = (time1, time2) => (time2 - time1) / (60 * 60 * 1000);

const setItemData = (labelContent, valueContent) => ({
    label: labelContent,
    value: valueContent,
});

const prepareDateInfoToShow = (date, time, type) => {
    const formattedDate = date.split('-').reverse().join('.');
    return setItemData(`${type}`, `${formattedDate}, ${time}`);
};

export const prepareSummaryItemsList = (itemsData) => {
    const {
        days,
        startDate,
        startTime,
        endDate,
        endTime,
        carClass,
        price,
        deposit,
        seatNum,
        seatPrice,
        gpsInfo,
        carWashInfo,
        totalPrice,
    } = itemsData;
    const startItem = prepareDateInfoToShow(startDate, startTime, 'start');
    const endItem = prepareDateInfoToShow(endDate, endTime, 'end');
    const carItem = setItemData('car class', `${carClass}`);
    const rentalItem = setItemData(`rental (${days} x ${price}PLN)`, `${days * price} PLN`);
    const childSeatItem = seatNum
        ? setItemData(`child seat (x${seatNum})`, `${seatPrice} PLN`)
        : null;
    const gpsItem = gpsInfo ? setItemData('gps', `${gpsInfo} PLN`) : null;
    const carWashItem = carWashInfo ? setItemData('car wash', `${carWashInfo} PLN`) : null;
    const totalPriceItem = setItemData('total price', `${totalPrice} PLN`);
    const depositItem = setItemData('deposit', `${deposit} PLN`);
    return [
        startItem,
        endItem,
        carItem,
        rentalItem,
        childSeatItem,
        gpsItem,
        carWashItem,
        totalPriceItem,
        depositItem,
    ].filter((item) => item);
};