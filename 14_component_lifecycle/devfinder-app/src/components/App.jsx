import styled from "styled-components";

import Header from "./Header";
import SearchBar from "./SearchBar";
import User from "./User";

import DevfinderContextProvider from "../devfinder/devfinder-context";

function App() {
  return (
    <>
      <DevfinderContextProvider>
        <MainStyled>
          <Header />
          <SearchBar />
          <User />
        </MainStyled>
      </DevfinderContextProvider>
    </>
  );
}

const MainStyled = styled.main`
  width: 30rem;

  @media (min-width: 768px) {
    width: 55rem;
  }

  @media (min-width: 1100px) {
    width: 57rem;
  }
`;

export default App;
