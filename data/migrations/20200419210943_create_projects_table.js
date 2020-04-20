
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table =>{
        table.increments();
        table.string('name').notNullable();
        table.text('description');
        table.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resources', table=>{
        table.increments();
        table.string('name').notNullable().unique();
        table.text('description');
    })
    .createTable('tasks', table=>{
        table.increments();
        table.text('description').notNullable();
        table.text('notes');
        table.boolean('completed').notNullable().defaultTo(false);
        table.integer('project_id',128)
            .unsigned()
            .notNullable()
            .references('id').inTable('projects');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
