import { useEffect } from "react";

const Child = () => {
  useEffect(() => {

    const clickCallback = () => {
      console.log('scroll');
    }
    window.addEventListener('scroll', clickCallback)
    return () => {
      window.removeEventListener('scroll', clickCallback)
    }
  }, []);

  return (
    <div>
      <div>Child Component</div>
      <div>Child Component</div>
      <div>Child Component</div>
      <div>Child Component</div>
    </div>
  )
}

export default Child;
