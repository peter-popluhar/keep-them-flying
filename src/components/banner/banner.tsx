import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children?: ReactNode;
};

const Banner: FC<Props> = ({ children }) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.heading}>Keep them flying...</h1>
      {children}
    </div>
  );
};

export default Banner;
