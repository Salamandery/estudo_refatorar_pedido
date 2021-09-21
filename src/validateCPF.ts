const CPF_LENGTH = 11;
const CPF_DIGIT_POSITION = 9;
const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;
const MAX_DIGITS_1 = 9;
const MAX_DIGITS_2 = 10;

function isInvalidLength(cpf: string): boolean {
    return (cpf.length !== CPF_LENGTH);
}

function stringTreatement(cpf: string): string {
    return cpf.replace(/\D/g, "");
}

function stringToNumberArray(cpf: string): number[] {
	return [...cpf].map(digit => parseInt(digit));
}

function ifAllNumberAreEquals(cpf: string): boolean {
    const [ digit1 ] = cpf;
    return cpf.split("").every((digit: string): boolean => digit === digit1);
}

function getCheckDigit(cpf: string): string {
	return cpf.slice(CPF_DIGIT_POSITION);
}

function calculateDigit(cpf: string, factor: number, max: number): number {
    let total: number = 0; 

    for (const digit of stringToNumberArray(cpf).slice(0, max)) {
        total += digit * factor--;
    }

    return (total%CPF_LENGTH < 2) ? 0 : (CPF_LENGTH - total%CPF_LENGTH); 
}

function validateCPF(cpf: string): Boolean {
	if (cpf === null) return false; 
    if (cpf === undefined) return false;

    cpf = stringTreatement(cpf);

    if (isInvalidLength(cpf)) return false;
    if (ifAllNumberAreEquals(cpf)) return false; 

    const digit1 = calculateDigit(cpf, FACTOR_DIGIT_1, MAX_DIGITS_1);
    const digit2 = calculateDigit(cpf, FACTOR_DIGIT_2, MAX_DIGITS_2);
    const cpfCalculated = `${digit1}${digit2}`;

    return cpfCalculated == getCheckDigit(cpf);
}

export {
    validateCPF
}