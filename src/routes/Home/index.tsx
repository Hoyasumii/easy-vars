import { Template } from "@components";
import { Home } from "@pages";
import { Controller } from "../types";

const HomeRoute: Controller = {
  path: "/",
  element: <Template title="Página Inicial" />,
  children: [
    {
      index: true,
      element: <Home />,
    },
  ],
};

export default HomeRoute;
