import { Skeleton } from "antd";

import styles from "./styles.module.css";

const FormSkeleton = () => {
  return (
    <div className={styles.formGrid}>
      <Skeleton.Input active size="default" style={{ width: "100%" }} />
      <Skeleton.Input active size="default" style={{ width: "100%" }} />
      <Skeleton.Input active size="default" style={{ width: "100%" }} />
      <Skeleton.Input active size="default" style={{ width: "100%" }} />
      <Skeleton.Input active size="default" style={{ width: "100%" }} />
      <Skeleton.Input active size="default" style={{ width: "100%" }} />
      <Skeleton.Input active size="default" style={{ width: "100%" }} />
      <Skeleton.Input active size="default" style={{ width: "100%" }} />
      <Skeleton.Input
        active
        size="default"
        style={{ width: "100%" }}
        className={styles.lastRow}
      />
    </div>
  );
};

export default FormSkeleton;
