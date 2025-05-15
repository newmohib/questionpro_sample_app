const rateLimit = require('express-rate-limit');
const { RedisStore } = require('rate-limit-redis');
const redis = require('../services/redis.service');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  store: new RedisStore({
    sendCommand: (...args) => redis.sendCommand(args)
  })
});

module.exports = limiter;