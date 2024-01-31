import { createElement, useEffect } from "react";
import View from "./view";
import { TemplateProps } from "./types";
import { setPageTitle } from "@utils";

export default (props: TemplateProps) => {
  useEffect(() => {
    setPageTitle(props.title);
  }, [props.title]);

  return createElement(View, { children: props?.children });
};
