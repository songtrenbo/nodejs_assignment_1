var fs = require("fs");

function seedMySQL() {
  var dirSeed = "./models/seed";
  var dirSeedUser = "./models/seed/userData.js";
  if (!fs.existsSync(dirSeed)) {
    fs.mkdirSync(dirSeed);
  }
  fs.writeFile(
    dirSeedUser,
    `function UserData(knex) {
const users = [
  {
    firstName: "A",
    lastName: "Nguyen Van",
    age: 25,
    grossSalary: 20000000,
    netSalary: 17460000,
  },
  {
    firstName: "B",
    lastName: "Tran Van",
    age: 57,
    grossSalary: 50000000,
    netSalary: 41001750,
  },
  {
    firstName: "C",
    lastName: "Lam Van",
    age: 61,
    grossSalary: 15000000,
    netSalary: 13303750,
  },
];
knex("User")
  .insert(users)
  .then(() => console.log("data inserted"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
}

module.exports = {
UserData
}`,
    function (err) {
      if (err) throw err;
    }
  );

  
}

function seedMongoDB() {
  var dirSeed = "./models/seed";
  var dirSeedUser = "./models/seed/userData.js";
  if (!fs.existsSync(dirSeed)) {
    fs.mkdirSync(dirSeed);
  }
  fs.writeFile(
    dirSeedUser,
    `const seedUsers = [
      {
          firstName: 'Cong',
          lastName: 'Nguyen',
          age: 20,
          grossSalary: 0,
          netSalary: 0
      },
      {
          firstName: 'A',
          lastName: 'Nguyen',
          age: 20,
          grossSalary: 0,
          netSalary: 0
      },
      {
          firstName: 'Lam',
          lastName: 'Dang',
          age: 20,
          grossSalary: 0,
          netSalary: 0
      },
      {
          firstName: 'Anh',
          lastName: 'Pham',
          age: 20,
          grossSalary: 0,
          netSalary: 0
      },
  ]
  module.exports = { seedUsers };
  `,
    function (err) {
      if (err) throw err;
    }
  );
}

module.exports = {
  seedMySQL,
  seedMongoDB,
};
