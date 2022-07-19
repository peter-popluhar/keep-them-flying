import { FC, ReactNode } from "react";
import Features from "../features";
import Tiles from "../tiles";

type Props = {
  children?: ReactNode;
};

const LandingPage: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Features />
      <Tiles />
    </>
  );
};

export default LandingPage;
