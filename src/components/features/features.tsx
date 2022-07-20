import { FC } from "react";

import { data } from "./data";
import Item from "./feature-item";
import styles from "./styles.module.css";

const Features: FC = () => {
  return (
    <div className={styles.features}>
      <h2>Solutions for travelers during the COVID-19 pandemic</h2>
      <ul className={styles.list}>
        {data.map(({ img, title, description, btn }, i) => {
          return (
            <li key={i}>
              <Item
                title={title}
                img={img}
                description={description}
                button={btn}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Features;
