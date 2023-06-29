import { useCallback, useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(10);

  const onClick = useCallback(() => {
    setCounter(counter + 1)
  }, [ counter ]);

  return {
    counter,
    incrementCounter: onClick
  }
}

export default useCounter;
