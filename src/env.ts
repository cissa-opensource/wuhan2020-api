import * as path from 'path';
import * as dotenv from 'dotenv';

const env = dotenv.config({ path: path.join(__dirname, "../.env") }).parsed;

// When running "index.ts", this file gets run, and
// we want to verify that the .env variables our app
// needs are loaded. Otherwise, throw an error
function checkIfEnvIsDefined(key: string) {
  if (process.env[key] === undefined) {
    throw Error(`${key} is undefined in .env`);
  }
}

// Ensure the variable names below match to the one in .env
checkIfEnvIsDefined("STAGE");
checkIfEnvIsDefined("MYSQL_URL");
checkIfEnvIsDefined("APP_SECRET");

export { env }