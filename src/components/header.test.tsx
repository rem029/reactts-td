import { shallow, ShallowWrapper } from "enzyme";

import Header from "./header";
import { findByTestId } from "../utils/test";

const setup = (props?: {}): ShallowWrapper => {
  return shallow(<Header id="appHeader" />);
};

describe("<Header />", () => {
  const wrapper = setup();

  const checkElementIfExist = (idSelector: string) => {
    const element = findByTestId(wrapper, idSelector);
    expect(element.length).toBe(1);
  };

  test("renders without error", () => {
    checkElementIfExist("appHeader");
  });

  test("renders logo", () => {
    checkElementIfExist("headerLogo");
  });

  test("renders navbar", () => {
    checkElementIfExist("headerNav");
  });
});
