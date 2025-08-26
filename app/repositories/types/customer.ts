
export type Pagination = { page?: number; perPage?: number }
export type CreatePayload = { name: string; email: string; phone?: string }
export type UpdatePayload = Partial<CreatePayload>
