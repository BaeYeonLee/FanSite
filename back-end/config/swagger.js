module.exports = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Fansite-IU API Documentation',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      contact: {
        name: 'BaeYeon Lee',
        email: 'piglet.by@gmail.com',
      },
    },
  },
  apis: ['./routes/*/index.js'],
}
