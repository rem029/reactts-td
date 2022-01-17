import { ContainerProps } from "../types";

import "./list.scss";

const List = ({ id, children }: ContainerProps): JSX.Element => {
  return (
    <div id={id} className="list__container">
      {children}
    </div>
  );
};

export default List;
