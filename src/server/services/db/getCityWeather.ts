import { query } from "../../helpers/queryRunner";

export const getCityWeather = (city: string) => {
  const sql = `SELECT * FROM ${city}`;
  return query(sql);
};
