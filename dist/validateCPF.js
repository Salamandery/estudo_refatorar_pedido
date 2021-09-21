"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCPF = void 0;
const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;
const MAX_DIGITS_1 = 9;
const MAX_DIGITS_2 = 10;
function isInvalidLength(cpf) {
    return (cpf.length < 11 || cpf.length > 14);
}
function stringTreatement(cpf) {
    return cpf.replace(/\D/g, "");
}
function stringToNumberArray(cpf) {
    return [...cpf].map(digit => parseInt(digit));
}
function ifAllNumberAreEquals(cpf) {
    const [digit1] = cpf;
    return cpf.split("").every((digit) => digit === digit1);
}
function getCheckDigit(cpf) {
    return cpf.slice(9);
}
function calculateDigit(cpf, factor, max) {
    let total = 0;
    for (const digit of stringToNumberArray(cpf).slice(0, max)) {
        total += digit * factor--;
    }
    return (total % 11 < 2) ? 0 : (11 - total % 11);
}
function validateCPF(cpf) {
    if (cpf === null)
        return false;
    if (cpf === undefined)
        return false;
    cpf = stringTreatement(cpf);
    if (isInvalidLength(cpf))
        return false;
    if (ifAllNumberAreEquals(cpf))
        return false;
    const digit1 = calculateDigit(cpf, FACTOR_DIGIT_1, MAX_DIGITS_1);
    const digit2 = calculateDigit(cpf, FACTOR_DIGIT_2, MAX_DIGITS_2);
    const cpfCalculated = `${digit1}${digit2}`;
    return cpfCalculated == getCheckDigit(cpf);
}
exports.validateCPF = validateCPF;
