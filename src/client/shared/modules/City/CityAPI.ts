import { fetchData } from "../../../../helpers";

export const handleGetWeather = (city: string) => {
  const opt = {
    method: "get",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };
  const url = `${process.env.REACT_APP_API_URL}/api/getWeather/${city}`;
  return fetchData(url, opt).then((res: any) => res?.weather_data || []);
};
