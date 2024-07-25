import { useState } from "react";
import { ExampleContainer } from "../components/example-container";

export function Example8() {
  const [objectState, setObjectState] = useState({
    count: 0,
  });
  console.log("Example is rendering");
  return (
    <ExampleContainer id={8}>
      <p>Count: {objectState.count}</p>
      <button
        onClick={() =>
          setObjectState((obj) => {
            obj.count += 1;
            return obj;
          })
        }
      >
        My Button
      </button>
    </ExampleContainer>
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
// When modifying React state, we need a new reference to the state, we can't simply mutate the
// the original object. This creates performance issues when you have large objects that need to
// be recreated every time state changes.
// * https://react.dev/learn/updating-objects-in-state
