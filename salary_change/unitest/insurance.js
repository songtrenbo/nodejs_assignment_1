module.exports  = class Insurance{
  constructor(){
    return true;
  }
  Insurance(Gross, MaxInsurance, Percent) {
    if (Gross * Percent > MaxInsurance) return MaxInsurance;
    return Gross * Percent;
  }
}