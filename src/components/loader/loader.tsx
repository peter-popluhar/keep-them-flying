// inspired by https://codepen.io/wnrosenberg/pen/abbvJxB

import { FC } from "react";
import styles from "./styles.module.css";

const Loader: FC = () => {
  return (
    <div id={styles.flight_loader}>
      <div className={styles.wrapper}>
        <span>LOADING FLIGHTS</span>
        <div className={styles.locstart}></div>
        <div className={styles.flightpath}>
          <div className={styles.airplane}></div>
        </div>
        <div className={styles.locend}></div>
      </div>
    </div>
  );
};

export default Loader;
