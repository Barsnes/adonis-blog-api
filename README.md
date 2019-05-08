# Adonis Blog API application

This is a blog API created with AdonisJS.

You can connect it to any front-end, I have a repo using React [here](https://github.com/Barsnes/adonis-blog-react).

### Nav
- Using the API calls
- What you need to edit

## Using the API calls

Get all blog posts
```
GET /api/blogs
```

Store new blog post
```
POST /api/blogs
```

Deleting a blog post
```
DELETE /api/blogs/:id
```

## Things you need to update
You will need to make sure you update the ```config/cors.js```
Add the correct origin of the request, otherwise the API won't respond to external responses.
```
origin: ['http://localhost:3000']
```
