import { forwardRef } from "react";
import Select, { Props } from "react-select";
import makeAnimated from "react-select/animated";

export type NewSelectProps = Props & {
  isAnimation?: boolean;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NewSelect = forwardRef<any, NewSelectProps>(
  ({ isAnimation = true, ...props }, ref) => {
    const animatedComponents = makeAnimated();

    return (
      <Select
        ref={ref}
        components={isAnimation ? animatedComponents : undefined}
        {...props}
      />
    );
  },
);
