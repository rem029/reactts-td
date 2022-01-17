import { shallow, ShallowWrapper } from "enzyme";

import Main from "./main";
import { findByTestId } from "../utils/test";

const setup = (props?: {}): ShallowWrapper => {
  return shallow(<Main id="appMain" />);
};

describe("<Main />", () => {
  const wrapper = setup();

  const checkElementIfExist = (idSelector: string) => {
    const element = findByTestId(wrapper, idSelector);
    expect(element.length).toBe(1);
  };

  test("renders without error", () => {
    checkElementIfExist("appMain");
  });

  test("renders list component", () => {
    checkElementIfExist("mainList");
  });
});
