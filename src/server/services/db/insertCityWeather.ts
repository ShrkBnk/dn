import { query } from "../../helpers/queryRunner";
import { getWeatherData } from "../app/getWeatherData";
import { handleSpaces } from "../../../helpers";

export const insertCityWeather = async (city: string) => {
  let cityWithoutSpaces = handleSpaces(city);
  const weatherFullData = getWeatherData(cityWithoutSpaces);
  let currentWeather: any = {};
  await weatherFullData.then((res: any) => (currentWeather = res));
  const sql = `INSERT INTO ${cityWithoutSpaces} (address, datetime, temp, humidity, wspd, pressure) VALUES('${currentWeather.address}', to_timestamp(${currentWeather.datetime}), ${currentWeather.temp}, ${currentWeather.humidity}, ${currentWeather.wspd}, ${currentWeather.pressure})`;
  return query(sql);
};
