import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ListContainer from "../containers/list";
import ListItem from "./listItem";
import ListItemCreate from "./listItemCreate";

import {
  getListItems,
  getListStatus,
  fetchListItems,
} from "../redux/listSlice";
import { useAppSelector, useAppDispatch } from "../redux/store";

import { DefaultProps, Item } from "../types";

const List = ({ id }: DefaultProps): JSX.Element => {
  const listItems = useAppSelector(getListItems);
  const listStatus = useAppSelector(getListStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListItems());
  }, []);

  return (
    <ListContainer id={id}>
      <ListItemCreate id="listItemCreate" />
      <p>
        Status: <strong>{listStatus}</strong>
      </p>
      {listItems.map((item: Item) => (
        <ListItem key={item.postId} id="listItem" item={item} />
      ))}
    </ListContainer>
  );
};

export default List;
