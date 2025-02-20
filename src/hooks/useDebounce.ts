import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debounceVal, setDebounceVal] = useState<T>(value);
  useEffect(() => {
    const getVal = setTimeout(() => {
      setDebounceVal(value);
    }, delay);

    return () => clearTimeout(getVal);
  }, [value, delay]);

  return debounceVal;
};
