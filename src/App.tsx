import { Route, Routes } from "react-router-dom";
import "./App.css";

import { HeadingContainer } from "./components/DefaultPropsContainer";
import { FunctionalProps } from "./components/FunctionalProps";
import { UserList } from "./components/UserList/UserList";

import { useRecoilValue } from "recoil";
import { userAtomState } from "./components/recoil/userAtomState";

export const App = () => {
  const users = useRecoilValue(userAtomState);

  return (
    <Routes>
      <Route
        path="/playground"
        element={
          <>
            <HeadingContainer>Child Elements</HeadingContainer>
            <FunctionalProps header={(header: number) => <div>{header}</div>}>
              {(num: number) => <div>{num}</div>}
            </FunctionalProps>
          </>
        }
      />

      <Route
        path="/"
        element={<UserList persons={users} />}
      />
    </Routes>
  );
};
