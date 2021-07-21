import { query } from "../../helpers/queryRunner";

export const removeCity = (city: string) => {
  const sql = `DROP TABLE IF EXISTS ${city}`;
  return query(sql);
};
