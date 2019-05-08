'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BlogSchema extends Schema {
  up () {
    this.create('blogs', (table) => {
      table.increments()
      table.string('title')
      table.text('body')
      table.timestamps()
    })
  }

  down () {
    this.drop('blogs')
  }
}

module.exports = BlogSchema
