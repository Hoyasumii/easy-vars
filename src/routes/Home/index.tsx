import { Template } from "@components";
import { Home } from "@pages";
import { RouteObject } from "react-router-dom";

const HomeRoute: RouteObject = {
  path: "/",
  element: <Template title="Homepage" />,
  children: [
    {
      index: true,
      element: <Home />,
    },
  ],
};

export default HomeRoute;
