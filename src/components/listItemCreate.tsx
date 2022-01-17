import React, { useEffect, useState } from "react";
import { Item, DefaultProps } from "../types";

import { addItem, getListItems } from "../redux/slices/list";
import { useAppSelector, useAppDispatch } from "../redux/store";

import "./listItemCreate.scss";

const initialState: Item = {
  body: "",
  title: "",
  userId: 0,
  postId: 0,
};

const ListItemCreate = ({ id }: DefaultProps): JSX.Element => {
  const [item, setItem] = useState<Item>(initialState);
  const itemTotal = useAppSelector(getListItems).length;
  const dispatch = useAppDispatch();

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setItem((currentValue) => {
      if (name === "title") return { ...currentValue, title: value };
      if (name === "body") return { ...currentValue, body: value };
      else return currentValue;
    });
  };

  const onSubmit = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    console.log("new item", item);

    dispatch(addItem(item));
  };

  useEffect(() => {
    setItem((currentValue) => ({ ...currentValue, postId: itemTotal + 1 }));
  }, [itemTotal]);

  return (
    <form id={id}>
      <h2>Create new list</h2>
      <label>Title</label>
      <input
        id="listItemCreateInputTitle"
        type="text"
        name="title"
        value={item.title}
        placeholder="Enter post title..."
        onChange={onInputChange}
      />

      <label>Body</label>
      <textarea
        id="listItemCreateInputBody"
        name="body"
        value={item.body}
        placeholder="Enter post body..."
        onChange={onInputChange}
      />

      <button type="submit" id="listItemCreateButtonSubmit" onClick={onSubmit}>
        <strong>Create</strong>
      </button>
    </form>
  );
};

export default ListItemCreate;
