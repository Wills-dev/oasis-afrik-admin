import { useRef } from "react";

export const useDebouncedSetter = (delay = 500) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debounce = (callback: () => void) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(callback, delay);
  };

  return debounce;
};
