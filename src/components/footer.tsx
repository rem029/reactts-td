import { DefaultProps } from "../types";
import FooterContainer from "../containers/footer";

const Footer = ({ id }: DefaultProps): JSX.Element => {
  return <FooterContainer id={id}>Footer</FooterContainer>;
};

export default Footer;
