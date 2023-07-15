import type { App } from "vue";
import FormLayout from "./FormLayout.vue";

// 使用install方法，在app.use挂载
FormLayout.install = (app: App) => {
  app.component(FormLayout.__name as string, FormLayout);
};

export default FormLayout;
