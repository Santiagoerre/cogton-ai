import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

type Database = PostgresJsDatabase<typeof schema>;

let instance: { client: postgres.Sql; db: Database } | undefined;

// Connect lazily so importing this module (e.g. during `next build`) doesn't
// require POSTGRES_URL. The error only surfaces when a query actually runs.
function getInstance() {
  if (!instance) {
    if (!process.env.POSTGRES_URL) {
      throw new Error('POSTGRES_URL environment variable is not set');
    }
    const client = postgres(process.env.POSTGRES_URL);
    instance = { client, db: drizzle(client, { schema }) };
  }
  return instance;
}

export const db = new Proxy({} as Database, {
  get(_target, prop) {
    const real = getInstance().db;
    const value = Reflect.get(real, prop, real);
    return typeof value === 'function' ? value.bind(real) : value;
  }
});

export function getClient() {
  return getInstance().client;
}
