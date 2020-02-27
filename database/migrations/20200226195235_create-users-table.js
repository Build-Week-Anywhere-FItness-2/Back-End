
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
    
        users
          .string('username', 255)
          .notNullable()
          .unique();
        users.string('password', 255).notNullable();
        users.boolean('trainer_status').notNullable().defaultTo(false);
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
