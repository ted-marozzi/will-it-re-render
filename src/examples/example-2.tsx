import { useCallback, useState } from "react";
import { ExampleContainer } from "../components/example-container";

export function Example2() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => setCount((count) => count + 1), []);

  return (
    <ExampleContainer id={2}>
      <p>{count}</p>
      <MyButton incrementCount={incrementCount} />
    </ExampleContainer>
  );
}

// When clicked will MyButton re-render?
export function MyButton({ incrementCount }: { incrementCount: () => void }) {
  console.log("MyButton is rendering");
  return (
    <button
      onClick={() => {
        incrementCount();
      }}
    >
      My button
    </button>
  );
}
