exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          email: 'adams@email.com',
          fullname: 'Adams J',
          password: 'dorwssap'
        },
        {
          id: 2,
          email: 'burton@email.com',
          fullname: 'Burton W.',
          password: 'password1'
        },
        {
          id: 3,
          email: 'connor@email.com',
          fullname: 'Connor S.',
          password: 'password123'
        },
        {
          id: 4,
          email: 'simpson@email.com',
          fullname: 'Simpson G.',
          password: 'password123'
        }
      ]);
    });
};
