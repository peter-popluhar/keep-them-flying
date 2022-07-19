import { FC } from "react";

type Props = {
  img: string;
  title: string;
};

const Item: FC<Props> = ({ img, title }) => {
  return (
    <>
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </>
  );
};

export default Item;
