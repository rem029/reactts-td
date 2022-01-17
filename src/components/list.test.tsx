import { shallow, ShallowWrapper } from "enzyme";

import List from "./list";
import { findByTestId } from "../utils/test";

const setup = (props?: {}): ShallowWrapper => {
  return shallow(<List id="mainList" />);
};

describe("<List />", () => {
  const wrapper = setup();

  const checkElementIfExist = (idSelector: string) => {
    const element = findByTestId(wrapper, idSelector);
    expect(element.length).toBe(1);
  };

  const checkElementHasItems = (idSelector: string) => {
    const element = findByTestId(wrapper, idSelector);
    expect(element.length > 0).toBe(true);
  };

  test("renders without error", () => {
    checkElementIfExist("mainList");
  });

  test("renders list items component", () => {
    checkElementHasItems("listItem");
  });

  test("renders list item create component", () => {
    checkElementIfExist("listItemCreate");
  });
});
