import { useEffect } from "react";

import ListContainer from "../containers/list";
import ListItem from "./listItem";
import ListItemCreate from "./listItemCreate";

import list, {
  getListItems,
  getListStatus,
  fetchListItems,
  getListErrors,
} from "../redux/slices/list";
import { useAppSelector, useAppDispatch } from "../redux/store";

import { DefaultProps, Item } from "../types";

const List = ({ id }: DefaultProps): JSX.Element => {
  const listItems = useAppSelector(getListItems);
  const listStatus = useAppSelector(getListStatus);
  const listErrors = useAppSelector(getListErrors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListItems());
  }, []);

  const onRefreshClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(fetchListItems());
  };

  return (
    <ListContainer id={id}>
      <ListItemCreate id="listItemCreate" />
      <p>
        Status: <strong>{listStatus}</strong>
      </p>
      <button onClick={onRefreshClick}>Refresh</button>
      {listErrors && (
        <p style={{ color: "red" }}>
          <strong>{listErrors.message}</strong>
        </p>
      )}
      {listItems.map((item: Item) => (
        <ListItem key={item.postId} id="listItem" item={item} />
      ))}
    </ListContainer>
  );
};

export default List;
