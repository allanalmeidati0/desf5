// app/Controllers/Http/CustomersController.ts
import CustomerService from '#services/customer_service'
import { createCustomerValidator, updateCustomerValidator } from '#validators/customer'
import type { HttpContext } from '@adonisjs/core/http'



export default class CustomersController {
  private service = new CustomerService()

  async index({ request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const perPage = Number(request.input('perPage', 20))
    return this.service.listAll({ page, perPage })
  }

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createCustomerValidator)
    return this.service.create(payload)
  }

  async show({ params }: HttpContext) {
    return this.service.findById(Number(params.id))
  }

  async update({ params, request }: HttpContext) {
    const payload = await request.validateUsing(updateCustomerValidator)
    return this.service.update(Number(params.id), payload)
  }

  async destroy({ params }: HttpContext) {
    await this.service.delete(Number(params.id))
    return { message: 'Cliente removido com sucesso' }
  }
}
