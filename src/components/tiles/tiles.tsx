import { FC } from "react";
import { data } from "./data";
import Item from "./tile-item";
import styles from "./styles.module.css";

const Tiles: FC = () => {
  return (
    <div className={styles.tiles}>
      <h2>Find inspiration in places picked just for you</h2>
      <ul className={styles.list}>
        {data.map(({ img, title }, i) => {
          return (
            <li key={i}>
              <Item title={title} img={img} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tiles;
