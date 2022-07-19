import { FC } from "react";
import { Button } from "antd";

type Props = {
  img: string;
  title: string;
  description: string;
  button: string;
};

const Item: FC<Props> = ({ img, title, description, button }) => {
  return (
    <>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button>{button}</Button>
    </>
  );
};

export default Item;
