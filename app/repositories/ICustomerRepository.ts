// app/Repositories/ICustomerRepository.ts
import type { Pagination, CreatePayload, UpdatePayload } from './types/customer'
import type Customer from '#models/customer'
import type { ModelPaginatorContract } from '@adonisjs/lucid/types/model'

export default interface ICustomerRepository {
  listAll(pagination?: Pagination): Promise<ModelPaginatorContract<Customer>>
  countAll(): Promise<number>
  findById(id: number): Promise<Customer | null>
  findByName(name: string, pagination?: Pagination): Promise<ModelPaginatorContract<Customer>>
  create(payload: CreatePayload): Promise<Customer>
  update(id: number, payload: UpdatePayload): Promise<Customer>
  delete(id: number): Promise<void>
}
