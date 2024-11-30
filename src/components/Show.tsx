import React from "react";
import { animationStyle, TWhen } from "../style";

type ShowProps<T> = {
  when: TWhen<T>;
  fallback?: React.ReactNode;
  children: React.ReactNode | ((items: T | TWhen<T>) => React.ReactNode);
  animated?: boolean;
};

const Show = <T,>({
  when,
  fallback = null,
  children,
  animated = false,
}: ShowProps<T>): React.ReactElement | null => {
  const elementRef = React.useRef<HTMLDivElement>(null);
  // TODO: EXIT ANIMATION SOON
  // const isLeaving = React.useRef(false);
  // const [shouldRender, setShouldRender] = React.useState(when);

  React.useEffect(() => {
    if (!animated) return;

    const style = document.createElement("style");
    style.innerHTML = animationStyle;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // React.useEffect(() => {
  //   if (!animated) {
  //     setShouldRender(true as T);
  //     return;
  //   }

  //   setShouldRender(when ? (true as T) : (false as T));

  //   if (when) {
  //     // isLeaving.current = false;
  //   } else {
  //     isLeaving.current = true;
  //     const element = elementRef.current;
  //     if (element) {
  //       element.classList.remove("rrh-enter");
  //       element.classList.add("rrh-leave");
  //     }
  //   }
  // }, [when, animated]);
  // TODO: EXIT ANIMATION SOON
  // const onAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
  //   if (isLeaving.current && e.animationName === AnimationToken.FadeOut) {
  //     const element = elementRef.current;
  //     isLeaving.current = false;
  //     setShouldRender(false);
  //     if (element) {
  //       element.classList.remove("rrh-leave");
  //     }
  //   }
  // };

  // if (!shouldRender) return null;

  const component = when
    ? typeof children === "function"
      ? children(when)
      : children
    : fallback;

  if (component === null || component === undefined) return null;

  return (
    <div
      ref={elementRef}
      // onAnimationEnd={onAnimationEnd}
      className={when ? "rrh-enter" : ""}
    >
      {component}
    </div>
  );
};

export default Show;
