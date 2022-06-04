const Insurance = require("./insurance");
const insurance = new Insurance();

exports.socialInsurance = (values) => {
  const data = insurance.SocialInsure(values);
  switch (data) {
    case 0:
      return 0;
    case 80000:
      return 80000;
    case 2384000:
      return 2384000;
    default:
  }
};