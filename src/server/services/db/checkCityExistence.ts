import { query } from "../../helpers/queryRunner";
import { handleSpaces } from "../../../helpers";

export const handleCheckExistence = (city: string) => {
  const cityWithoutSpaces = handleSpaces(city, "_");
  const sql = `SELECT EXISTS(SELECT * FROM information_schema.tables WHERE table_name = '${cityWithoutSpaces}')`;
  return query(sql);
};
