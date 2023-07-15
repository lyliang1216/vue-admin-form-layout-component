import FormLayout from "./FormLayout/index.vue";

const install = function (app: any, name?: string) {
  app.component(name || FormLayout.name, FormLayout);
};

export default { install, FormLayout };
