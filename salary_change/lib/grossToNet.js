const {Insurance} = require('./insurance');
const {PersonallIncomeTax} = require('./personallIncomeTax');
function grossToNetSalary(gross, depend) {
    var socialInsure = Insurance(gross, 2384000,0.08);
    var healthInsure = Insurance(gross, 447000,0.015);
    var unemploymentInsure = Insurance(gross, 884000, 0.01);
    var incomeBeforeTax = gross - (socialInsure + healthInsure + unemploymentInsure);
    var personalCir = 11000000;
    var familyCir = 4400000 * depend;
    var incomeTax = incomeBeforeTax - personalCir - familyCir;
  
    var personalIncomeTax = PersonallIncomeTax(incomeTax);
    if(personalIncomeTax == 0){
      incomeTax=0;
    }
    var net = incomeBeforeTax - personalIncomeTax;
      
    var data ={
      grossSalary: parseInt(gross),
      socialInsure: parseInt(socialInsure),
      healthInsure: parseInt(healthInsure),
      unemploymentInsure: parseInt(unemploymentInsure),
      incomeBeforeTax: parseInt(incomeBeforeTax),
      personalCir: personalCir,
      familyCir: familyCir,
      incomeTax: parseInt(incomeTax),
      personalIncomeTax: parseInt(personalIncomeTax),
      netSalary: parseInt(net)
    };
    return data;
  }
module.exports = {
    grossToNetSalary
}  