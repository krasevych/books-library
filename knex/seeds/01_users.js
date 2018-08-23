exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: '345ae4d0-f2c3-4342-91a2-5b45cb8db57f',
          email: 'adams@email.com',
          fullname: 'Adams J',
          password: 'dorwssap'
        },
        {
          id: '16c1ef84-df72-4be1-ad46-1168ee53cd60',
          email: 'burton@email.com',
          fullname: 'Burton W.',
          password: 'password1'
        },
        {
          id: 'b8d2586f-4746-418c-82b2-db9eff7a7f42',
          email: 'connor@email.com',
          fullname: 'Connor S.',
          password: 'password123'
        },
        {
          id: '52e1cc10-20b9-4cf2-ad94-3b0c135d35a5',
          email: 'simpson@email.com',
          fullname: 'Simpson G.',
          password: 'password123'
        }
      ]);
    });
};
