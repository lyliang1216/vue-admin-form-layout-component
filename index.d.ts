type OptionsType = {
  fixedContentArea?: boolean;
};

declare module "form-layout" {
  export const FormLayout: import("vue").DefineComponent<OptionsType>;

  const install: (
    app: import("vue").App,
    options: {
      name: string;
    }
  ) => unknown;
  export default install;
}
