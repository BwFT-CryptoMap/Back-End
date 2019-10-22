const primaryRouter = require('express').Router()

// import routes
const authRouter = require('./auth/auth-router')
const watchlistRouter = require('./watchlist/watchlist-router')

// use routes
primaryRouter.use('/', authRouter)
watchlistRouter.use('/watchlist', watchlistRouter)

module.exports = primaryRouter;