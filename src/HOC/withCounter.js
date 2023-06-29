import { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent() {
    const [counter, setCounter] = useState(10);
    const onClick = () => {
      setCounter(counter + 1)
    }

    return (
      <OriginalComponent
        counter={counter}
        incrementCounter={onClick}
      />
    );
  }
  return NewComponent;
};
export default UpdatedComponent;
