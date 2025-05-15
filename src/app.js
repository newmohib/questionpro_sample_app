const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./utils/logger');
const securityMiddleware = require('./middleware/security');
const limiter = require('./middleware/rateLimit');
const specs = require('./docs/swagger');
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    ip: req.ip
  });
  next();
});

// Update middleware section
app.use(securityMiddleware);
app.use(limiter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api', routes);
app.use(errorHandler);

module.exports = app;