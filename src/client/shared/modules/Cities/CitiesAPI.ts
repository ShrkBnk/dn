import { fetchData } from "../../../../helpers";

export const getAllCities = () => {
  const opt = {
    method: "get",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };
  const url = `${process.env.REACT_APP_API_URL}/api/getAllCities`;
  return fetchData(url, opt).then((res: any) => res?.cities || []);
};

export const getIfCityExists = (city: string) => {
  const opt = {
    method: "get",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };
  const url = `${process.env.REACT_APP_API_URL}/api/checkExistence/${city}`;
  return fetchData(url, opt).then((res: any) => res?.exists);
};

export const addCity = (city: string) => {
  const data = {
    city,
  };
  const opt = {
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  };
  const url = `${process.env.REACT_APP_API_URL}/api/addCity`;
  return fetchData(url, opt).then((res: any) => {
    console.log("HAS ADDED ", res);
  });
};

export const removeCity = (city: string) => {
  const data = {
    city,
  };

  const opt = {
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  };

  const url = `${process.env.REACT_APP_API_URL}/api/removeCity`;
  return fetchData(url, opt).then((res: any) => {
    return { success: res?.removed_city === city, city: city };
  });
};
