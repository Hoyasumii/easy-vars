import { ThemeConfig, theme } from "antd";
import data from "@root/hoyl.json";

export default {
  algorithm: data.darkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: "#f64348",
  },
  components: {},
} as ThemeConfig;
