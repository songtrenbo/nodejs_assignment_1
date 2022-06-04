const Insurance = require("./insurance");
const insurance = new Insurance();

exports.healthInsurance = (values) => {
    const data = insurance.HealthInsure(values);
    switch (data) {
        case 0:
            return 0;
        case 15000:
            return 15000;
        case 447000:
            return 447000;
        default:
    }
}