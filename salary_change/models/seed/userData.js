function UserData(knex) {
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
}