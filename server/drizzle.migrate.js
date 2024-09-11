require("dotenv").config();
const { execSync } = require("child_process");

// Executa o comando do drizzle-kit após carregar o .env
execSync("npx drizzle-kit generate", { stdio: "inherit" });
