const prometheus = require('prom-client');
const collectDefaultMetrics = prometheus.collectDefaultMetrics;

collectDefaultMetrics({ timeout: 5000 });

const httpRequestDurationMicroseconds = new prometheus.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000]
});

module.exports = {
  prometheus,
  httpRequestDurationMicroseconds
};