import { Item, DefaultProps } from "../types";

type Props = { item: Item } & DefaultProps;

const ListItem = ({ id, item }: Props): JSX.Element => {
  return (
    <div id={id}>
      <h3>{item.title}</h3>
      <p>userId: {item.userId}</p>
      <p>postId: {item.postId}</p>
      <p>{item.body}</p>
    </div>
  );
};

export default ListItem;
