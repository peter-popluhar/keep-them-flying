import { FC, ReactNode } from "react";
import Banner from "../banner";

type Props = {
  children?: ReactNode;
};

const LandingPage: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <div>body</div>
    </>
  );
};

export default LandingPage;
