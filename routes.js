const routes = require('next-routes')

module.exports = routes()
.add('register')
.add('parent', '/register/parent')
.add('pricing', '/register/parent/pricing')
.add('children', '/register/children')
.add('children-home', '/children')
