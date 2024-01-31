import { createElement } from "react";
import View from "./view";
import TemplateProps from "./types";

export default (props: TemplateProps) => {
  return createElement(View, props);
};
