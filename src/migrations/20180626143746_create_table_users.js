
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name',100).notNullable()
        table.string('email',90).notNullable()
        table.string('password',20).notNullable()

    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
