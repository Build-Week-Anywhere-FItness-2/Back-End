
exports.up = function(knex) {
    return knex.schema

    .createTable('users', tbl =>{
        tbl.increments();

        tbl
            .string('username', 128)
            .notNullable()
            .unique();

        tbl
          .string('first_name', 128)
          .notNullable();

        tbl
          .string('last_name', 128)
          .notNullable();

        tbl
          .string('email', 128)
          .notNullable();

        tbl
          .string('password', 256)
          .notNullable()

          tbl
          .boolean('is_trainer')
          .notNullable()
          .defaultTo(false);
    })

        .createTable('classes', tbl => {
            tbl.increments();

            tbl
                .string("class_name", 128)
                .notNullable()
                .unique();

            tbl.string('description', 256);

            tbl.string('class_type', 256);

            tbl.string('class_time', 256);

            tbl.string('class_date', 256);

            tbl.string('intensity', 256);

            tbl.string('location', 256);

            tbl.integer("attendees")
            .defaultTo(0);

            tbl.integer("open_spots")
                .defaultTo(45);

            tbl
                .integer('users_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            
        })


        .createTable('comments', tbl => {
            tbl.increments();

            tbl
                .string('tittle', 128)
                .notNullable()

            tbl.string('content', 256)
                .notNullable();

            tbl
                .integer('classes_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('classes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');


            tbl
                .integer('users_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })


  
};

exports.down = function(knex) {
    exports.down = function(knex, Promise) {
        return knex.schema.dropTableIfExists(
                'users',
                'classes',
                'comments'
            );
      };
};