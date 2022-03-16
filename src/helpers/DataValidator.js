import { countTime, countHoursDifference } from './helpersFunctions';
import rentalData from '../data/rentalData';

export default class DataValidator {
    constructor() {
        this.timezoneOffset = new Date().getTimezoneOffset() * 60000;
        this.currentTime = new Date(Date.now()).getTime();
    }

    name = {
        regExp: /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,2}$/,
        err: 'min. 3 letters',
        required: true,
    };

    lastName = {
        regExp: /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,2}$/,
        err: 'min. 3 letters',
        required: true,
    };

    email = {
        regExp: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        err: 'e-mail address required',
        required: true,
    };

    phone = {
        regExp: /^((00)?)[1-9]{1}\d{7,13}$/,
        err: 'required - only digits',
        required: true,
    };

    startDate = {
        regExp: /^20\d{2}[-/.](0[1-9]|1[0-2])[-/.](0[1-9]|[12]\d|3[01])$/,
        err: 'today or future',
        required: true,
    };

    startTime = {
        regExp: /^((0[8-9]|1[0-9]):[0-5][0-9])$|^(20:00)$/,
        err: 'working hours 08:00 - 20:00',
        required: true,
    };

    endDate = {
        regExp: /^2022[-/.](0[1-9]|1[0-2])[-/.](0[1-9]|[12]\d|3[01])$/,
        err: 'today or future',
        required: true,
    };

    endTime = {
        regExp: /^((0[8-9]|1[0-9]):[0-5][0-9])$|^(20:00)$/,
        err: 'working hours 08:00 - 20:00',
        required: true,
    };

    car = {
        regExp: /^[a-zA-Z]$/,
        err: 'select car class',
        required: true,
    };

    checkDataErrors(inputName, inputValue) {
        if (!this[inputName]) {
            return null;
        }
        return !(!this[inputName].required && inputValue.trim().length === 0)
            ? this.isDataValid(inputName, inputValue)
            : null;
    }

    isDataValid(inputName, inputValue) {
        const isDataValid = this.isMatchRegex(inputName, inputValue.trim());
        const isDateCorrect = this.checkIsDate(inputName, inputValue);
        return !isDataValid || !isDateCorrect ? this.createErrObject(inputName) : null;
    }

    checkDateErrors(startDateValue, endDateValue, startTimeValue, endTimeValue) {
        const { minRentalLengthHours, minStartDifferenceHours } = rentalData;
        const startTime = countTime(startDateValue, startTimeValue);
        const endTime = countTime(endDateValue, endTimeValue);
        const startHoursDifference = countHoursDifference(this.currentTime, startTime);
        const startEndHoursDifference = countHoursDifference(startTime, endTime);
        return (
            startHoursDifference > minStartDifferenceHours &&
            startEndHoursDifference > minRentalLengthHours
        );
    }

    isMatchRegex(inputName, inputValue) {
        return this[inputName].regExp.test(inputValue);
    }

    checkIsDate(inputName, inputValue) {
        return inputName === 'startDate' || inputName === 'endDate'
            ? this.isFutureDate(inputValue)
            : true;
    }

    isFutureDate(inputValue) {
        const currentDate = this.getCurrentDate();
        return new Date(inputValue) >= new Date(currentDate);
    }

    getCurrentDate() {
        return new Date(Date.now() - this.timezoneOffset).toISOString().slice(0, 10);
    }

    createErrObject(inputName) {
        return {
            [inputName]: this[inputName].err,
        };
    }
}
