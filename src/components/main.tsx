import MainContainer from "../containers/main";
import List from "./list";

import { DefaultProps } from "../types";

const Main = ({ id }: DefaultProps): JSX.Element => {
  return (
    <MainContainer id={id}>
      <List id="mainList" />
    </MainContainer>
  );
};

export default Main;
