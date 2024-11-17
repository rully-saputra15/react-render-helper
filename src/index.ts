import React from "react";

type ShowProps<T> = {
  when: T | undefined | null | false;
  fallback?: React.ReactNode;
  children: React.ReactNode | ((items: T) => React.ReactNode);
};

const Show = <T>({ when, fallback = null, children }: ShowProps<T>) => {
  if (!when) {
    return fallback || null;
  }

  if (typeof children === "function") {
    return children(when);
  }
  return children;
};

export default Show;
