import { useEffect, useState } from "react";
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const previousData = localStorage.getItem(key);
    return previousData ? JSON.parse(previousData) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
