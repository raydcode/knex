exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'kathir',
          last_name: 'karthik',
          email: 'kathir@gmail.com',
        },
        {
          id: 2,
          first_name: 'ray',
          last_name: 'dcode',
          email: 'raydcode@gmail.com',
        },
        {
          id: 3,
          first_name: 'john',
          last_name: 'wick',
          email: 'johnwick@gmail.com',
        },
      ]);
    });
};
