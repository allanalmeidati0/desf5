import Customer from '#models/customer'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Customer.createMany([
      {
        name: 'Maria Souza',
        email: 'maria.souza@example.com',
        phone: '11988887777',
      },
      {
        name: 'João Silva',
        email: 'joao.silva@example.com',
        phone: '21999998888',
      },
      {
        name: 'Ana Paula',
        email: 'ana.paula@example.com',
        phone: '31977776666',
      },
    ])
  }
}