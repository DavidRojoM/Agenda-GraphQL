import { config } from 'dotenv';

config();

export const environment = {
  appPort: process.env.PORT || 3000,
  dbPort: process.env.DB_PORT || 27017,
  dbHost: process.env.DB_HOST || 'localhost',
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD || 'root',
  dbName: process.env.DB_NAME || 'contacts',
};
