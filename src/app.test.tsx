import { shallow, ShallowWrapper } from "enzyme";

import App from "./app";
import { findByTestId } from "./utils/test";

const setup = (props?: {}): ShallowWrapper => {
  return shallow(<App />);
};

describe("<App />", () => {
  const wrapper = setup();

  const checkElementIfExist = (idSelector: string) => {
    const element = findByTestId(wrapper, idSelector);
    expect(element.length).toBe(1);
  };

  test("renders app without error", () => {
    checkElementIfExist("app");
  });

  test("renders header", () => {
    checkElementIfExist("appHeader");
  });

  test("renders main", () => {
    checkElementIfExist("appMain");
  });

  test("renders footer", () => {
    checkElementIfExist("appFooter");
  });
});
