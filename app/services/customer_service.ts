// app/Services/CustomerService.ts

// import type { Pagination, CreatePayload, UpdatePayload } from 'App/Repositories/types/customer'

import ICustomerRepository from '../repositories/ICustomerRepository.js'
import LucidCustomerRepository from '../repositories/LucidCustomerRepository.js'
import { CreatePayload, Pagination, UpdatePayload } from '../repositories/types/customer.js'

export default class CustomerService {
  constructor(private repo: ICustomerRepository = new LucidCustomerRepository()) {}

  listAll(pagination?: Pagination) {
    return this.repo.listAll(pagination)
  }

  countAll() {
    return this.repo.countAll()
  }

  findById(id: number) {
    return this.repo.findById(id)
  }

  findByName(name: string, pagination?: Pagination) {
    return this.repo.findByName(name, pagination)
  }

  create(payload: CreatePayload) {
    return this.repo.create(payload)
  }

  update(id: number, payload: UpdatePayload) {
    return this.repo.update(id, payload)
  }

  delete(id: number) {
    return this.repo.delete(id)
  }
}
