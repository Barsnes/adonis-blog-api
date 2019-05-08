'use strict'

const Blog = use('App/Models/Blog')

class BlogController {

  async index ({ request, response }) {
    const blog = await Blog.all()
    return response.status(201).json( { blog } )
  }

  async create ({ request, response, view }) {
  }

  async store({ request, response }) {

    const {
      title,
      body
    } = request.all()

    const blog = await Blog.create({
      title,
      body
    })

    return response.status(201).json({ blog })

  }

  async delete ({ request, response }) {

    const blog = await Blog.findOrFail(request.params.id)
    blog.delete()

    return response.status(201).json({ success: 'Blog deleted' })
  }

}

module.exports = BlogController
