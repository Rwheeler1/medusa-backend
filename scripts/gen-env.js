const fs = require("fs");

const env = `
DATABASE_URL=${process.env.DATABASE_URL}
REDIS_URL=${process.env.REDIS_URL}
STRIPE_API_KEY=${process.env.STRIPE_API_KEY || ""}
STRIPE_WEBHOOK_SECRET=${process.env.STRIPE_WEBHOOK_SECRET || ""}
JWT_SECRET=${process.env.JWT_SECRET || ""}
COOKIE_SECRET=${process.env.COOKIE_SECRET || ""}
PORT=${process.env.PORT || 9000}
`;

fs.writeFileSync(".env", env);
console.log("✅ .env file generated");
