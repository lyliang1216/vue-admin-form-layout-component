import FormLayout from "./FormLayout/index.vue";

const install = function (app, options = {}) {
  app.component(options.name || FormLayout.name, FormLayout);
};

export default function (app) {
  app.use(install);
}

export { FormLayout };
