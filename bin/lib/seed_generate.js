var fs = require("fs");

function seedMySQL() {
  var dirSeed = "./models/seed_data";
  var dirSeedUser = "./models/seed_data/userData.js";
  if (!fs.existsSync(dirSeed)) {
    fs.mkdirSync(dirSeed);
  }
  fs.writeFile(
    dirSeedUser,
    `async function SeedUser(knex) {
const exists = await knex.schema.hasTable("User");
if (!exists) {
  const users = [
      { 
          firstName: "A",
          lastName: "Nguyen Van",
          age: 25             
      },
      { 
          firstName: "B",
          lastName: "Tran Van",
          age: 57             
      },
      { 
          firstName: "C",
          lastName: "Lam Van",
          age: 61             
      }
  ];
  knex('User').insert(users).then(() => console.log("data inserted"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
  });
}
}
module.exports = {
SeedUser,
};
`,
    function (err) {
      if (err) throw err;
    }
  );
}

module.exports = {
  seedMySQL,
};
