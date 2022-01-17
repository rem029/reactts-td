import { ShallowWrapper } from "enzyme";

export const findByTestId = (wrapper: ShallowWrapper, val: string): ShallowWrapper => {
  return wrapper.find(`[id='${val}']`);
};
