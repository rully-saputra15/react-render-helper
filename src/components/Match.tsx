import React, { PropsWithChildren } from "react";

type Props = {
  when: boolean;
};
const Match: React.FC<PropsWithChildren<Props>> = ({ children, when }) => {
  if (!when) return null;
  return children;
};

export default Match;
