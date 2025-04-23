import { PrismaClient } from "../generated/prisma/client";

export default class Database {
  public static client: PrismaClient;

  public static async connect() {
    try {
      console.log(`Connecting to database...`);
      const client = new PrismaClient();
      await client.$connect();
      this.client = client;
      console.log(`Database connected successfully.`);
    } catch (err: unknown) {
      console.error(` Error connecting to database:`, err);
      return process.exit(1);
    }
  }
}
