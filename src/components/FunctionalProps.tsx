import { ReactNode, useState } from "react";

// export const FunctionalProps = ({ children }) => ()

interface FunctionalPropsType {
  children: (num: number) => ReactNode;
  header: (num: number) => ReactNode;
}

export const FunctionalProps = ({ header, children }: FunctionalPropsType) => {
  const [state, setState] = useState<number>(1);

  return (
    <div>
      <h2>{header(state)}</h2>
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}> Add</button>
      </div>
    </div>
  );
};
