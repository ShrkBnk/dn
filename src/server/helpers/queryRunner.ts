import { pool } from "../services/config";

export const query = async (sql: string) => {
  try {
    const res = await pool.query(sql);
    const valid = ["SELECT"];
    if (valid.includes(res?.command)) {
      return res?.rows;
    }
    return true;
  } catch (error) {
    // throw error;
    console.log("error: ", error);
    return false;
  }
};
