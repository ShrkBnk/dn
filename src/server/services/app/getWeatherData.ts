import { fetchData } from "../../../helpers";
import { CityWeather } from "../../models/CityWeather";

export const getWeatherData = (city: string) => {
  const opt = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let url = `${process.env.WEATHER_API_URL}?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  return fetchData(url, opt).then((res: any) => {
    const { main, wind } = res;
    return CityWeather({ ...main, ...wind, address: city });
  });
};
