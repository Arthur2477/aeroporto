import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bagagens'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('passageiro_id')
        .unsigned()
        .references('id')
        .inTable('passageiros')
        .notNullable()
      table.decimal('peso').notNullable()
      table.string('tamanho', 50).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
