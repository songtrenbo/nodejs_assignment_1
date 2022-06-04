const model = require("../models/entities/user.js");
const {numberWithCommas} = require("../lib/numberWithCommas");
const homeView = (req, res) => {
  model.listUser(function (data) {
    const dataSalary = {
      grossSalary: 0,
      socialInsure: 0,
      healthInsure: 0,
      unemploymentInsure: 0,
      incomeBeforeTax: 0,
      personalCir: 11000000,
      familyCir: 0,
      incomeTax: 0,
      personalIncomeTax: 0,
      netSalary: 0
    }
    res.render("home", {
      fetchData: data,
      dataSalary: dataSalary,
      numberWithCommas: numberWithCommas
    });
  });
};
const calculate = (req, res) => {
  var gross = req.body.income;
  var depend = req.body.depend;
  var dataSalary = model.CalculateGrossToNet(gross, depend);
  model.listUser(function (data) {
    res.render("home", {
      fetchData: data,
      dataSalary: dataSalary,
      numberWithCommas: numberWithCommas
    });
  });
};
module.exports = {
  homeView,
  calculate,
};
