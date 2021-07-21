import { insertCityWeather } from "../services/db/insertCityWeather";

export const runJob = (city: string) => {
  const minutes = process.env.DB_UPDATE_INTERVAL_MINUTES || 10,
    the_interval = +minutes * 60 * 1000;

  // Before timer start - add first row data
  insertCityWeather(city).then(() => console.log(`Started job, city: ${city}`));

  // This solution end if we restart or stop node
  setInterval(() => {
    insertCityWeather(city).then(() => {
      console.log(`I am doing my ${minutes} minutes check, city: ${city}`);
    });
  }, the_interval);
};
