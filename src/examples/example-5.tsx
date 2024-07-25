import { PropsWithChildren, useState } from "react";
import { ExampleContainer } from "../components/example-container";

export function Example5() {
  const [count, setCount] = useState(0);

  return (
    <ExampleContainer id={5}>
      <MyParentComponent>
        <MyChildComponent />
      </MyParentComponent>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        My Button
      </button>
    </ExampleContainer>
  );
}

function MyParentComponent({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

function MyChildComponent() {
  console.log("MyChildComponent is rendering");
  return (
    <div>
      <p>MyChildComponent</p>
    </div>
  );
}

// Lesson:
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// To prevent large re-render trees, move state as low in the tree as possible AND and pass in
// components as children if they don't depend on that state.
