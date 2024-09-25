import { useState, useEffect } from 'react';

/**
 * Custom hook for debouncing a value.
 * @param value The value to debounce.
 * @param delay The delay in milliseconds.
 * @returns The debounced value.
 */
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup timeout if the component is unmounted or value/delay changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
