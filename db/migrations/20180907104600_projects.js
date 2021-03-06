
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments();

    tbl
      .string('name', 120)
      .notNullable()
      .unique('project_name');

    tbl
      .string('description')
      .notNullable();

    tbl
      .boolean('completed')
      .defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
