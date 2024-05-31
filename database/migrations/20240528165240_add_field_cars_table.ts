import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table("cars", (table: Knex.AlterTableBuilder) => {
    table.boolean("available").after("finish_rent").defaultTo(true).notNullable();
    table.timestamp("deleted_at").after("updated_at");
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.table("cars", (table: Knex.AlterTableBuilder) => {
    table.dropColumns("available", "deleted_at");
  })
}

