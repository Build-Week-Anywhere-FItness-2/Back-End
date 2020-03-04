exports.seed = function(knex, Promise) {
  return knex('comments').insert([
    {
      "tittle": "love this Class!",
      "content": "this class was so hard",
      "classes_id": "1",
      "users_id": "4"
    },

    {
      "tittle": "love this Class!",
      "content": "this class was so hard",
      "classes_id": "2",
      "users_id": "2"
    },

    {
      "tittle": "love this Class!",
      "content": "this class was so hard",
      "classes_id": "3",
      "users_id": "3"
    },

  ]);
};
