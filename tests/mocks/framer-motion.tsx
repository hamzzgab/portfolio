import React from "react";

export const motion = new Proxy(
  {},
  {
    get: (_target, prop: string) => {
      return React.forwardRef(({ children, ...props }: any, ref: any) => {
        const {
          initial,
          animate,
          exit,
          transition,
          whileInView,
          viewport,
          whileHover,
          whileTap,
          variants,
          ...domProps
        } = props;
        return React.createElement(prop, { ...domProps, ref }, children);
      });
    },
  }
);

export const AnimatePresence = ({ children }: any) => children;
export const useAnimation = () => ({});
export const useInView = () => true;
