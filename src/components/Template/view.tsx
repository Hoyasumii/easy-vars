import { TemplatePropsView } from "./types";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const { Content } = Layout;

const View: React.FC<TemplatePropsView> = (props: TemplatePropsView) => {
  return (
    <Layout className="layout">
      <Content>{props.children ? props.children : <Outlet />}</Content>
    </Layout>
  );
};
export default View;
