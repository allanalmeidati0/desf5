import Customer from '#models/customer'
import type ICustomerRepository from './ICustomerRepository'
import type { Pagination, CreatePayload, UpdatePayload } from './types/customer'
import type { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'

export default class LucidCustomerRepository implements ICustomerRepository {
  private baseQuery(): ModelQueryBuilderContract<typeof Customer> {
    return Customer.query()
  }

  private resolvePagination(p?: Pagination) {
    const page = Math.max(Number(p?.page ?? 1), 1)
    const perPage = Math.min(Math.max(Number(p?.perPage ?? 20), 1), 100)
    return { page, perPage }
  }

  async listAll(pagination?: Pagination) {
    const { page, perPage } = this.resolvePagination(pagination)
    return this.baseQuery().orderBy('id', 'asc').paginate(page, perPage)
  }

  async countAll() {
    const [{ total }] = await Customer.query().count('* as total')
    return Number(total ?? 0)
  }

  async findById(id: number) {
    return Customer.find(id)
  }

  async findByName(name: string, pagination?: Pagination) {
    const { page, perPage } = this.resolvePagination(pagination)
    return this.baseQuery()
      .whereILike('name', `%${name}%`)
      .orderBy('id', 'asc')
      .paginate(page, perPage)
  }

  async create(payload: CreatePayload) {
    // Confiança no índice único no banco + Vine unique() no validator.
    // Se quiser manter a checagem otimista:
    const exists = await Customer.query().where('email', payload.email).first()
    if (exists) throw new Error('E-mail já cadastrado')
    return Customer.create(payload)
  }

  async update(id: number, payload: UpdatePayload) {
    const customer = await Customer.findOrFail(id)

    if (payload.email && payload.email !== customer.email) {
      const conflict = await Customer.query().where('email', payload.email).first()
      if (conflict) throw new Error('E-mail já cadastrado')
    }

    customer.merge(payload)
    await customer.save()
    return customer
  }

  async delete(id: number) {
    const customer = await Customer.findOrFail(id)
    await customer.delete()
  }
}
