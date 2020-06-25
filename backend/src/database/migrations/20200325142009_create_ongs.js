
exports.up = function(knex) {

    // O Método é utilizado para realizar uma nova atividade, como criaçao de tabelas 
 return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
    // O Método é utilizado para realizar correçõs como deletar tabelas e mais
    return knex.schema.dropTable('ongs')
};
