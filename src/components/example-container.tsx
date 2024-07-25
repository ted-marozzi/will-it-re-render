import { PropsWithChildren } from "react";

export function ExampleContainer({
  children,
  id,
}: PropsWithChildren<{ id: number }>) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: "1rem",
      }}
    >
      <p>Example #{id}</p>
      {children}
      <div>
        <hr />
      </div>
    </div>
  );
}
