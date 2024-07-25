import { memo, useCallback, useState } from "react";
import { ExampleContainer } from "../components/example-container";

export function Example3() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => setCount((count) => count + 1), []);

  return (
    <ExampleContainer id={3}>
      <p>{count}</p>
      <MyButton incrementCount={incrementCount} />
    </ExampleContainer>
  );
}

// When clicked will MyButton re-render?
export const MyButton = memo(
  ({ incrementCount }: { incrementCount: () => void }) => {
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
);

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
// The button does not depend on the count state thus doesn't need to re-render when that state
// changes.
//
// To prevent a child component re-rendering we need to ensure all of the props are
// referentially stable and we ALSO need to memoise the component.
//
// If this feels like a lot (it is), check out:
// * https://www.solidjs.com/, a React alternative with a different rendering model which does this
//     by default
// * https://react.dev/learn/react-compiler, Reacts answer to SolidJS which is coming soon and will
//     perfom this memoisation by default by transpiling your code
