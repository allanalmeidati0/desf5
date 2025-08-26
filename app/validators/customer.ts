import vine from '@vinejs/vine'

export const createCustomerValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(150),
    email: vine
      .string()
      .trim()
      .email()
      .maxLength(254)
      .unique({ table: 'customers', column: 'email' }),
    phone: vine.string().trim().maxLength(30).optional(),
  })
)

export const updateCustomerValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(150).optional(),
    email: vine.string().trim().email().maxLength(254).optional(),
    phone: vine.string().trim().maxLength(30).optional(),
  })
)
