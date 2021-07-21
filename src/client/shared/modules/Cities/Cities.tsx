import * as React from "react";
import { useRef } from "react";
import { FC, useEffect, useState } from "react";
import * as S from "./Cities.style";
import Select from "../../components/Select/Select";
import City from "../City/City";
import {
  getAllCities,
  getIfCityExists,
  addCity,
  removeCity,
} from "./CitiesAPI";
import { handleSpaces } from "../../../../helpers";

type CitiesProps = {};

const Cities: FC<CitiesProps> = () => {
  const [message, setMessage] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [cities, setCities] = useState<Array<any>>([]);

  const inputRef: any = useRef("");

  useEffect(() => {
    getCities();
  }, []);

  const getCities = () => {
    getAllCities().then((res: any) => {
      setCities(res);
      const city = res[0]?.table_name || "";
      setSelectedCity(city);
    });
  };

  const handleRemove = () => {
    removeCity(selectedCity).then((res: any) => {
      if (res.success) {
        setMessage(`City: ${res.city} - deleted from database`);
        getCities();
      } else {
        setMessage(`City: ${res.city} - some error while deleting`);
      }
    });
  };

  const handleSelectInput = (e: any) => {
    const city = e.target.value;
    setSelectedCity(city);
  };

  const handleSubmitCity = (e: any) => {
    e.preventDefault();

    // Here we should check if the city exists in the real world
    // atm. we just accept every input
    const city = inputRef.current.value || "";

    if (!!city) {
      getIfCityExists(city).then((res: boolean) => {
        if (res) setMessage(`City: ${city} - already exists in database`);
        else {
          addCity(city);
          setMessage(`City: ${city} - started weather info tracking`);
          inputRef.current.value = "";
          getCities();
        }
      });
    }
  };

  const handleRemoveMessage = () => {
    setMessage("");
  };

  return (
    <S.Container>
      {message && (
        <S.MessageContainer onClick={handleRemoveMessage}>
          {message}
        </S.MessageContainer>
      )}

      <S.SearchContainer>
        <S.SelectContainer>
          <Select onChange={handleSelectInput}>
            {cities.map((res: any, i: number) => {
              const value = res?.table_name || [];
              return (
                value && (
                  <option key={i} value={value}>
                    {handleSpaces(value, "_", " ")}
                  </option>
                )
              );
            })}
          </Select>
          <button onClick={handleRemove}>Remove: {selectedCity}</button>
        </S.SelectContainer>

        <S.Form onSubmit={handleSubmitCity}>
          <input type="text" name="name" ref={inputRef} placeholder={"City"} />
          <button type="submit"> Add </button>
        </S.Form>
      </S.SearchContainer>

      {selectedCity && <City city={selectedCity} />}
    </S.Container>
  );
};

export default Cities;
