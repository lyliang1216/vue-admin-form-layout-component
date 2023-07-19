import FormLayout from "./dist/packages/formLayout/FormLayout.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    FormLayout: typeof FormLayout;
  }
}
