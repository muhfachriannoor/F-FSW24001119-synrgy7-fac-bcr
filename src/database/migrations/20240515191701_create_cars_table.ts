import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table: Knex.CreateTableBuilder) => {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.integer("price").notNullable();
    table.string("size").notNullable();
    table.text("image").notNullable();
    table.timestamp("start_rent");
    table.timestamp("finish_rent");
    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cars");
}
