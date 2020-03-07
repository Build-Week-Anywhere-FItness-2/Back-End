exports.seed = function(knex, Promise) {
  return knex('classes').insert([
    {
      "class_name": "cardio",
      "description": "run like crazy",
      "class_type": "cardio",
      "class_date": "1/2/2020",
      "class_time": "9am - 2pm",
      "intensity": "low",
      "location": "City Public Park",
      "attendees": "0",
      "open_spots": "45",
      "users_id": "1"
    },

    {
      "class_name": "weights",
      "description": "lift like crazy",
      "class_date": "1/2/2020",
      "class_time": "9am - 2pm",
      "intensity": "low",
      "location": "City Public Park",
      "attendees": "0",
      "open_spots": "45",
      "users_id": "1"
    },

    {
      "class_name": "yoga",
      "description": "stretch like crazy",
      "class_date": "1/2/2020",
      "class_time": "9am - 2pm",
      "intensity": "low",
      "location": "City Public Park",
      "attendees": "0",
      "open_spots": "45",
      "users_id": "1",
    },

  ]);
};
