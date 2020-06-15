import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
      table.increments('id').primary();
      table.string('image').notNullable();
      table.string('title').notNullable();
      
    });
  }//Cria a tabela/campo

export async function down(knex: Knex){
  return knex.schema.dropTable('items');
}//Remove a tabela/campo