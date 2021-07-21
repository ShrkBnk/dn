type CityWeatherProps = {
  address: string;
  datetime: string;
  temp: number;
  humidity: number;
  speed: number;
  pressure: number;
};

export const CityWeather = (props: CityWeatherProps) => {
  const { temp, humidity, speed, pressure, address } = props;
  const currentDate = Date.now() / 1000.0;

  // Default data is (to avoid error) because we do not filter correct world cities
  return {
    address: address || "Not a real city",
    datetime: currentDate,
    temp: temp || 0,
    humidity: humidity || 0,
    wspd: speed || 0,
    pressure: pressure || 0,
  };
};
