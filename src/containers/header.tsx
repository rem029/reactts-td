import { ContainerProps } from "../types";

import "./header.scss";

const Header = ({ id, children }: ContainerProps): JSX.Element => {
  return <header id={id}>{children}</header>;
};

export default Header;
