import { useEffect, useRef } from "react";

export const useMountedEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const isMounted = useRef(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    isMounted.current
      ? effect
      : () => {
          isMounted.current = true;
        },
    deps
  );
};
