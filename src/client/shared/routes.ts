import { FC } from "react";
import Cities from "./modules/Cities/Cities";

const makeRoute = (path: string, component: FC, exact: boolean) => {
  return {
    path: path,
    exact: exact,
    component: component,
  };
};

const routes = () => {
  const cities = makeRoute(`/`, Cities, true);
  return [cities];
};

export default routes;
