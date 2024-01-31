import { RouteObject } from "react-router-dom";
import Home from "./Home";
import { Controller } from "./types";

const routes: RouteObject[] = [ Home ].map((route: Controller) => {
  return route as RouteObject;
});

export default routes;
