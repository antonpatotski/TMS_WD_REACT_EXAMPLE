import { useState } from "react";

// export const Test = ({ Element, increaseCount = 3 }) => {
//   const [counter, setCounter] = useState(10);
//
//   return (
//     <>
//       <Element
//         counter={counter}
//         incrementCounter={() => setCounter((size) => size + increaseCount)}
//       />
//     </>
//   )
// }
const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
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
