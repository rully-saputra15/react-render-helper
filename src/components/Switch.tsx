import React, { PropsWithChildren } from "react";

type Props = {
  fallback?: React.ReactNode;
};

const Switch: React.FC<PropsWithChildren<Props>> = ({ children, fallback }) => {
  const childrenArray = React.Children.toArray(children);

  for (const child of childrenArray) {
    if (React.isValidElement(child) && child.props.when) {
      return child;
    }
  }
  return fallback ?? null;
};

export default Switch;
