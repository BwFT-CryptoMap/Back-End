exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "fakeusername1",
          password: "password",
          email: "email@fake.com",
        },
        {
          id: 2,
          username: "fakeusername2",
          password: "password",
          email: "email@fake.com",
        },
        {
          id: 3,
          username: "fakeusername3",
          password: "password",
          email: "email@fake.com",
        },
      ]);
    });
};
