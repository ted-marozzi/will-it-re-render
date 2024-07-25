import { useState } from "react";
import { ExampleContainer } from "../components/example-container";

// Here we have a simple example of a component with count state and a button to increment the count
// We are going to be guessing "Will MyButton re-render" when clicked by checking in the console.
export function Example1() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((count) => count + 1);

  return (
    <ExampleContainer id={1}>
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

// Firstly though, I want to ask, do you think MyButton needs to re-render to function correctly?
