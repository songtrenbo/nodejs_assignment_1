const Insurance = require("./insurance");
const insurance = new Insurance();

exports.unEmployeeInsurance = (grossSalary) => {
    const data = insurance.UnemploymentInsure(grossSalary);
    switch (data) {
        case 100000:
            return 100000;
        case 884000:
            return 884000;
        default:
    }
}