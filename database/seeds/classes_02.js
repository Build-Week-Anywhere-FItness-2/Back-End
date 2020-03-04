exports.seed = function(knex, Promise) {
  return knex('classes').insert([
    {
      "class_name": "cardio",
      "description": "run like crazy",
      "open_spots": "45",
      "users_id": "1"
    },

    {
      "class_name": "weights",
      "description": "lift like crazy",
      "open_spots": "45",
      "users_id": "1"
    },

    {
      "class_name": "yoga",
      "description": "stretch like crazy",
      "open_spots": "45",
      "users_id": "1"
    },

  ]);
};
