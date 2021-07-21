import { runJob } from "../helpers/scheduleJob";
import { addCity } from "../services/db/addCity";
import { removeCity } from "../services/db/removeCity";
import { handleCheckExistence } from "../services/db/checkCityExistence";
import { Request, Response } from "express";
import { getAllCities } from "../services/db/getAllCities";
import { getCityWeather } from "../services/db/getCityWeather";

export const createDbCity = async (req: Request, res: Response) => {
  const { body } = req;
  const city = body?.city.toLowerCase();
  await addCity(city);
  runJob(city);
};

export const removeDbCity = (req: Request, res: Response) => {
  const { body } = req;
  const city = body?.city.toLowerCase();
  removeCity(city).then((data) => {
    if (data) res.send({ removed_city: city });
    else res.send({ error: true });
  });
};

export const checkDbCity = (req: Request, res: Response) => {
  const { city } = req.params;
  const data = handleCheckExistence(city.toLowerCase());
  data.then((data) => {
    const cityExists = data[0]?.exists;
    if (data) res.send({ exists: cityExists });
    else res.send({ error: true });
  });
};

export const getCities = (req: Request, res: Response) => {
  getAllCities().then((data) => {
    res.send({ cities: data });
  });
};

export const getWeather = (req: Request, res: Response) => {
  const { city } = req.params;
  getCityWeather(city).then((data) => {
    return res.send({ weather_data: data });
  });
};
