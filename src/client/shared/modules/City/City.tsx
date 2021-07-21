import * as React from "react";
import { FC, useEffect } from "react";
import * as S from "./City.style";
import { useState } from "react";
import Select from "../../components/Select/Select";
import { handleGetWeather } from "./CityAPI";
import WeatherData from "./WeatherData/WeatherData";
import { formatDate } from "../../helpers/formatDate";

type CityProps = {
  city: string;
};

const City: FC<CityProps> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<Array<any>>([]);
  const [currentWeatherData, setCurrentWeatherData] = useState<any>({});

  useEffect(() => {
    handleGetWeather(city).then((res: any) => {
      setWeatherData(res);

      // Default take first
      if (res[0]) getWeatherByDate(res, res[0]?.datetime);
    });
  }, [city]);

  const getWeatherByDate = (data: any, time: any) => {
    const weather = data.find((res: any) => res.datetime === time);
    setCurrentWeatherData(weather);
  };

  const handleTimeChange = (e: any) => {
    const time = e.target.value;
    getWeatherByDate(weatherData, time);
  };

  return (
    <S.Container>
      <Select onChange={handleTimeChange}>
        {weatherData.map((res: any, i: number) => {
          const value = res?.datetime || [];
          return (
            value && (
              <option key={i} value={value}>
                {formatDate(value)}
              </option>
            )
          );
        })}
      </Select>
      <WeatherData currentWeatherData={currentWeatherData} />
    </S.Container>
  );
};

export default City;
