import { ContainerProps } from "../types";

import "./main.scss";

const Main = ({ id, children }: ContainerProps): JSX.Element => {
  return <main id={id}>{children}</main>;
};

export default Main;
