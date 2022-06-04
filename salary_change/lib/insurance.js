function Insurance(Gross, MaxInsurance, Percent) {
  if (Gross * Percent > MaxInsurance) return MaxInsurance;
  return Gross * Percent;
}
module.exports = {
    Insurance
}