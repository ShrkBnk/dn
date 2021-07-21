import { query } from "../../helpers/queryRunner";

export const getAllCities = () => {
  const schema = process.env.DB_SCHEMA;
  const sql = `SELECT table_name FROM information_schema.tables WHERE table_schema = '${schema}'`;
  const existence = query(sql);
  return existence.then((res: any) => res);
};
