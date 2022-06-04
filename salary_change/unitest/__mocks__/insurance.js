module.exports = class MockInsurance {
  returnSocialInsure = {};
  returnHealthInsure = {};
  returnUnemploymentInsure = {};

  constructor() {
    this.returnSocialInsure = {
      "-1": 0,
      0: 0,
      1000000: 80000,
      29800000: 2384000,
      50000000: 2384000,
    };
    this.returnHealthInsure = {
        "-1": 0,
        0: 0,
        1000000: 15000,
        29800000: 447000,
        50000000: 447000,
    };
    this.returnUnemploymentInsure = {
        10000000 : 100000,
        88400000 : 884000,
        90000000: 884000,
    };
  }

  SocialInsure(grossSalary) {
    return this.returnSocialInsure[grossSalary];
  }
  HealthInsure(grossSalary) {
    return this.returnHealthInsure[grossSalary];
  }
  UnemploymentInsure(grossSalary) {
    return this.returnUnemploymentInsure[grossSalary];
  }
};
