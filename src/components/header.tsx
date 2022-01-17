import { DefaultProps } from "../types/";
import HeaderContainer from "../containers/header";

const Header = ({ id }: DefaultProps): JSX.Element => {
  return (
    <HeaderContainer id={id}>
      <span id="headerLogo">logo</span>
      <nav id="headerNav">navbar</nav>
    </HeaderContainer>
  );
};

export default Header;
