'use strict';
const callUnemployeeInsuranceCalculate = require('./callUnemploymentInsuranceCal');

jest.mock('./insurance.js');

describe('Test call UnEmployee Insurance', () => {
    describe('Test UnEmployeeInsurance function', () => {
        test('Check with grossSalary = 10000000 should return < 884000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(10000000);
            expect(result).toEqual(100000);
        });
        test('Check with grossSalary = 88400000 should return = 884000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(88400000);
            expect(result).toEqual(884000);
        });
        test('Check with grossSalary = 90000000 should return > 884000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(90000000);
            expect(result).toEqual(884000);
        });
    })
})