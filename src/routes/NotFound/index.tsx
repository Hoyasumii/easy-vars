import { Template } from "@components";
import { NotFound } from "@pages";
import { RouteObject } from "react-router-dom";

const NotFoundRoute: RouteObject = {
  path: "*",
  element: (
    <Template title="Not Found">
      <NotFound />
    </Template>
  ),
};

export default NotFoundRoute;
