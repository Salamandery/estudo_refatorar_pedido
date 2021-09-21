import { validateCPF } from './validateCPF';

test("Should block CPF number when every number are equals", function () {
    const cpfValidated = validateCPF("111.111.111-11");
    expect(cpfValidated).toBe(false);
});

test("Should check CPF number is valid (false)", function() {
    const cpfValidated = validateCPF("123.456.789-99");
    expect(cpfValidated).toBe(false);
});

test("Should check CPF number is valid (true)", function() {
    const cpfValidated = validateCPF("935.411.347-80");
    expect(cpfValidated).toBe(true);
});