import { Example1 } from "./examples/example-1";
import { Example2 } from "./examples/example-2";
import { Example3 } from "./examples/example-3";
import { Example4 } from "./examples/example-4";
import { Example5 } from "./examples/example-5";
import { Example6 } from "./examples/example-6";
import { Example7 } from "./examples/example-7";
import { Example8 } from "./examples/example-8";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignSelf: "center",
        gap: "1rem",
        height: "100%",
        width: "20rem",
        paddingLeft: "10rem",
        paddingTop: "2rem",
      }}
    >
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 />
      <Example6 />
      <Example7 />
      <Example8 />
    </div>
  );
}

export default App;
