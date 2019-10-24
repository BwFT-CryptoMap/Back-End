const primaryRouter = require('express').Router()

// import routes
const authRouter = require('./auth/auth-router')
const watchlistRouter = require('./watchlist/watchlist-router')
const homePageRouter = require('./homepage/homepage-router')
// use routes
primaryRouter.use('/', authRouter)
primaryRouter.use('/', watchlistRouter)
primaryRouter.use('/homepage', homePageRouter)

module.exports = primaryRouter;