/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const CustomersController = () => import('#controllers/customers_controller')

router
  .group(() => {
    // CRUD
    router.get('/', [CustomersController, 'index'])         // Find All (paginado)
    router.get('/count', [CustomersController, 'count'])    // Contagem
    router.get('/search', [CustomersController, 'searchByName']) // Find By Name
    router.get('/:id', [CustomersController, 'show'])       // Find By ID
    router.post('/', [CustomersController, 'store'])        // Create
    router.put('/:id', [CustomersController, 'update'])     // Update
    router.delete('/:id', [CustomersController, 'destroy']) // Delete
  })
  .prefix('/api/v1/customers')