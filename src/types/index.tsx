export type ContainerProps = {
  id: string;
  children?: React.ReactNode;
};

export type DefaultProps = {
  id: string;
};

export interface Item {
  userId: number;
  postId: number;
  title: string;
  body: string;
}
