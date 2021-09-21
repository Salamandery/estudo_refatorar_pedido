"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateCPF_1 = require("./validateCPF");
test("Should block CPF number when every number are equals", function () {
    const cpfValidated = (0, validateCPF_1.validateCPF)("111.111.111-11");
    expect(cpfValidated).toBe(false);
});
test("Should check CPF number is valid", function () {
    const cpfValidated = (0, validateCPF_1.validateCPF)("123.456.789-99");
    expect(cpfValidated).toBe(false);
});
test("Should check CPF number is valid", function () {
    const cpfValidated = (0, validateCPF_1.validateCPF)("935.411.347-80");
    expect(cpfValidated).toBe(true);
});
