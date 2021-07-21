import * as React from "react";
import { FC } from "react";
import * as S from "./WeatherData.style";

type WeatherDataProps = {
  currentWeatherData: any;
};

const WeatherData: FC<WeatherDataProps> = ({ currentWeatherData }) => {
  const { humidity, pressure, wspd, temp } = currentWeatherData;

  if (!pressure)
    return <S.Container>Data not yet fetched or wrong city</S.Container>;

  return (
    <S.Container>
      <div>
        Humidity: <S.Span>{humidity} % </S.Span>
      </div>
      <div>
        Pressure: <S.Span>{pressure} hPa</S.Span>
      </div>
      <div>
        Wind speed: <S.Span>{wspd} m/s</S.Span>
      </div>
      <div>
        Temp: <S.Span>{temp} C</S.Span>
      </div>
    </S.Container>
  );
};

export default WeatherData;
