const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 5000

// swagger
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc= require('swagger-jsdoc')

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

const swaggerOptions = {
  // define API lu
  swaggerDefinition: {
    info: {
      title: "Chapter 8 - Player Documentations",
      description: "Adinda Zafira - API documentation Chapter-8",
      contact: {
        name: "dinda"
      },
      servers: ["http://localhost:5000"]
    }  
  },
  apis: ["app.js", "./server/**/*.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/**
 * @Routes /api
 * entrypoint for all API routes
 */

app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})