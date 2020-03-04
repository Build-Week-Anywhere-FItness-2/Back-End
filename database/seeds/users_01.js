exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {
      "username": "lambdaStudent",
      "first_name": "Joe",
      "last_name": "Shmoe",
      "email": "JoeShome@gmail.com",
      "password": "12345678910",
      "is_trainer": "true"
    },

    {
      "username": "lambdaStudent2",
      "first_name": "Moe",
      "last_name": "Shmoe",
      "email": "MoeShome@gmail.com",
      "password": "12345678910",
      "is_trainer": "flase"
    },

    {
      "username": "lambdaStudent3",
      "first_name": "Koe",
      "last_name": "Shmoe",
      "email": "KoeShome@gmail.com",
      "password": "12345678910",
      "is_trainer": "false"
    },

    {
      "username": "lambdaStudent4",
      "first_name": "Foe",
      "last_name": "Shmoe",
      "email": "FoeShome@gmail.com",
      "password": "12345678910",
      "is_trainer": "false"
    },
  ]);
};
