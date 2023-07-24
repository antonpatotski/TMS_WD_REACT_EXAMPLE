import {useCallback, useEffect, useState} from "react";

export const useDebounce = () => {
  const [ currentTimeout, setCurrentTimeout ] = useState();
  const debounce = useCallback((value, callback) => {
    if (currentTimeout) {
      clearTimeout(currentTimeout);
    }

    setCurrentTimeout(setTimeout(() => {
      callback(value)
    }, 600));
  }, [ currentTimeout, setCurrentTimeout ])

  return debounce;
}
