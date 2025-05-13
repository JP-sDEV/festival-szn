import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST, // e.g., your-redis.redis.cache.windows.net
  port: process.env.REDIS_PORT, // Azure uses SSL on port 6380
  password: process.env.REDIS_KEY, // Access key from Azure
  tls: {}, // Required for Azure Redis
});

// const redis = new Redis({
//   host: "localhost",
//   port: 6379,
// });

export default redis;
