import { drizzle } from "drizzle-orm/node-postgres";
import {Pool} from "pg"
import {serverConfig} from "@/config/server.config";

const pool = new Pool({
    connectionString: serverConfig.databaseUrl
})

export const db = drizzle(pool);