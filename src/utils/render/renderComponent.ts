import React from "react";
import { AnimationToken } from "../../style";
import { TWhen } from "../../style/types";

export const renderChildren = <T>(
  child: React.ReactNode | ((items: T) => React.ReactNode) | TWhen<T>
): React.ReactElement | null => {
  if (React.isValidElement(child)) {
    return React.cloneElement(child as React.ReactElement, {
      className: `${
        (child as React.ReactElement).props.className || ""
      }`.trim(),
    });
  }
  return (child as React.ReactElement) || null;
};

export const renderElementWithAnimation = <T>(
  element: React.ReactNode | ((items: T) => React.ReactNode),
  isExit: boolean,
  handleSetShouldRender: (render: TWhen<T>) => void
): React.ReactElement | null => {
  if (React.isValidElement(element)) {
    return React.cloneElement(element as React.ReactElement, {
      className: `${(element as React.ReactElement).props.className || ""} ${
        isExit ? "leave" : "enter"
      }`.trim(),
      onAnimationEnd: (e: React.AnimationEvent) => {
        if (isExit && e.animationName === AnimationToken.FadeOut) {
          handleSetShouldRender(false);
        }
        element.props.onAnimationEnd?.(e);
      },
    });
  }
  return null;
};
