import { memo, useState } from "react";
import { ExampleContainer } from "../components/example-container";

export function Example6() {
  const [objectState, setObjectState] = useState({
    count: 0,
    team: "Internal Apps",
  });

  return (
    <ExampleContainer id={6}>
      <MyChildComponent objectState={objectState} />
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

const MyChildComponent = memo(
  ({ objectState }: { objectState: { count: number; team: string } }) => {
    console.log("MyChildComponent is rendering");
    return (
      <div>
        <p>MyChildComponent</p>
        <p>Team: {objectState.team}</p>
      </div>
    );
  }
);
