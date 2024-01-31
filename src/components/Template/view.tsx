import React, { useEffect } from "react";
import TemplateProps from "./types";
import { setPageTitle } from "@utils";
import { Outlet } from "react-router-dom";

const View: React.FC<TemplateProps> = (props: TemplateProps) => {
  useEffect(() => {
    setPageTitle(props.title);
  }, [props.title]);

  return <>{props.children ? props.children : <Outlet />}</>;
};

export default View;
