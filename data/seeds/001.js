exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'rowValue1',password:'12345678'},
        {username: 'rowValue2',password:'12345678'},
        {username: 'rowValue3',password:'12345678'}
      ]);
    });
};