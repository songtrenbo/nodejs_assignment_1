function PersonallIncomeTax(incomeTax) {
  if (incomeTax > 0 && incomeTax < 5000000) {
    return incomeTax * 0.05;
  } else if (incomeTax >= 5000000 && incomeTax < 10000000) {
    return incomeTax * 0.1 - 250000;
  } else if (incomeTax >= 10000000 && incomeTax < 18000000) {
    return incomeTax * 0.15 - 750000;
  } else if (incomeTax >= 18000000 && incomeTax < 32000000) {
    return incomeTax * 0.2 - 1650000;
  } else if (incomeTax >= 32000000 && incomeTax < 52000000) {
    return incomeTax * 0.25 - 3250000;
  } else if (incomeTax >= 52000000 && incomeTax < 80000000) {
    return incomeTax * 0.3 - 5850000;
  } else if (incomeTax >= 80000000) {
    return incomeTax * 0.35 - 9850000;
  } else {
    return 0;
  }
}
module.exports = {
    PersonallIncomeTax
}