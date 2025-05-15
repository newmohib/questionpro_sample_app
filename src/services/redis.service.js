const { createClient } = require('redis');

const redis = createClient({
  url: process.env.REDIS_URL
});

// Handle connection events
redis.on('connect', () => console.log('Redis client connected'));
redis.on('error', (err) => console.log('Redis client error:', err));

// Connect immediately
redis.connect()
  .then(() => console.log('Connected to Redis at:', redis.options.socket.host))
  .catch(console.error);

module.exports = redis;