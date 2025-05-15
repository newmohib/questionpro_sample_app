const helmet = require('helmet');
const cors = require('cors');

module.exports = [
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:']
      }
    }
  }),
  cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST']
  })
];