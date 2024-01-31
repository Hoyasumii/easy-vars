import { createElement, useEffect } from "react";
import View from "./view";
import { TemplateProps } from "./types";
import { setPageTitle } from "@utils";

export default ({ title, children }: TemplateProps) => {
  useEffect(() => {
    setPageTitle(title);
  }, [title]);

  return createElement(View, { children });
};
