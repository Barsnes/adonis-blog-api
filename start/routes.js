'use strict'


const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/api/blogs', 'BlogController.store')
Route.get('/api/blogs', 'BlogController.index')
Route.delete('/api/blogs/:id', 'BlogController.delete')
