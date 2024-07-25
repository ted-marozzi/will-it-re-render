import { PropsWithChildren, useState } from "react";
import { ExampleContainer } from "../components/example-container";

export function Example4() {
  return (
    <ExampleContainer id={4}>
      <MyParentComponent>
        <MyChildComponent />
      </MyParentComponent>
    </ExampleContainer>
  );
}

function MyParentComponent({ children }: PropsWithChildren) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>MyParentComponent</p>
      {children}
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        My Button
      </button>
    </div>
  );
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
// A child component won't re-render if its passed in as an arguments, as its value has already
// been evaluated

// const ParentComponentJSX = (
//   <MyParentComponent>
//     <MyChildComponent />
//   </MyParentComponent>
// );

// This might look a little clearer if we represent this as a function calls, we can see that the
// parent component doesn't even know how to re run MyChildComponent, instead it only knows the
// result.

// const ParentComponentFn = MyParentComponent({ children: MyChildComponent() });

// This is one of the reasons that i'm not a huge fan of JSX, I think it adds a lot of complexity
// (transpiling, new magic, new syntax, new footguns).
// I would of prefered everything to remain function calls though its an unpopular opinion.

// * https://flutter.dev/, is a mobile focused UI library that uses function calls instead of JSX.
//     It uses editor tooling too help with a lot of the issues that come with deeply nested fn
//     calls. https://miro.medium.com/v2/resize:fit:4800/format:webp/1*QdB2AMCeJdCXJjoKrJCvlw.png
