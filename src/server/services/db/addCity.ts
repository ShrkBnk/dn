import { query } from "../../helpers/queryRunner";
import { handleSpaces } from "../../../helpers";

export const addCity = (city: string): any => {
  const cityWithoutSpaces = handleSpaces(city);

  const sql = `CREATE TABLE IF NOT EXISTS ${cityWithoutSpaces} (
      address varchar(256) NULL DEFAULT NULL::character varying,
      datetime timestamp NULL,
      "temp" float8 NULL,
      humidity float8 NULL,
      wspd float8 NULL,
      pressure float8 NULL,
      id serial NOT NULL)`;

  return query(sql);
};
