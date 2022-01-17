import { shallow, ShallowWrapper } from "enzyme";

import ListItemCreate from "./listItemCreate";
import { findByTestId } from "../utils/test";

const setup = (props?: {}): ShallowWrapper => {
  return shallow(<ListItemCreate id="listItemCreate" />);
};

describe("<ListItemCreate />", () => {
  const wrapper = setup();

  const checkElementIfExist = (idSelector: string) => {
    const element = findByTestId(wrapper, idSelector);
    expect(element.length).toBe(1);
  };

  test("renders without error", () => {
    checkElementIfExist("listItemCreate");
  });

  test("renders input for title", () => {
    throw new Error();
  });

  test("renders input for body", () => {
    throw new Error();
  });

  test("renders button for create new list", () => {
    throw new Error();
  });

  test("updates input for title", () => {
    throw new Error();
  });

  test("updates input for body", () => {
    throw new Error();
  });

  test("clears input on succesful create new list", () => {
    throw new Error();
  });

  test("display errors on failed create new list", () => {
    throw new Error();
  });
});
