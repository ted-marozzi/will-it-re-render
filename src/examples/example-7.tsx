import { memo, useState } from "react";
import { ExampleContainer } from "../components/example-container";

export function Example7() {
  const [objectState, setObjectState] = useState({
    count: 0,
    team: "Internal Apps",
  });

  return (
    <ExampleContainer id={7}>
      <MyChildComponent team={objectState.team} />
      <p>Count: {objectState.count}</p>
      <button
        onClick={() =>
          setObjectState((obj) => ({ count: obj.count + 1, team: obj.team }))
        }
      >
        My Button
      </button>
    </ExampleContainer>
  );
}

const MyChildComponent = memo(({ team }: { team: string }) => {
  console.log("MyChildComponent is rendering");
  return (
    <div>
      <p>MyChildComponent</p>
      <p>Team: {team}</p>
    </div>
  );
});

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
// Where possible pass in primative values to memoised components as they are referentially equal,
// Object.is("Internal Apps", "Internal Apps") === true
// * https://react.dev/reference/react/memo#my-component-rerenders-when-a-prop-is-an-object-or-array

// If you need to pass in a non primative value (object, array) use useMemo to memoize it.
// If you need to pass in a function use useCallback to memoize it.

// The same logic can be applied to useEffect dependency arrays, pass in primatives or memoize
// useEffect(() => {}, [team]) is better than useEffect(() => {}, [objectState])
