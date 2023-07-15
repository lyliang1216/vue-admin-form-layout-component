import FormLayout from "./FormLayout/index.vue";

const install = function (app: any, name?: string) {
  app.component(name || FormLayout.name, FormLayout);
};

export default function (app: any) {
  app.use(install);
}

export { FormLayout };
