import styled from "styled-components";
import searchIcon from "../assets/icon-search.svg";

import { useContext, useRef } from "react";
import { DevfinderContext } from "../devfinder/devfinder-context";

const SearchBar = () => {
  const { onFetchUser, darkMode } = useContext(DevfinderContext);
  const input = useRef();

  function handleSearchUser(event) {
    if (input.current.value) {
      onFetchUser(input.current.value);
    }

    event.preventDefault();
  }

  return (
    <FormStyled className={darkMode && "dark"}>
      <img src={searchIcon} />
      <input ref={input} type="text" placeholder="Search GitHub username..." />
      <button onClick={handleSearchUser}>Search</button>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: ;

  width: 100%;
  height: 6rem;
  padding: 0 0.5rem;
  background-color: #fefefe;
  margin-top: 3.5rem;
  border-radius: 1.5rem;
  box-shadow: 0px 9px 98px -35px rgba(0, 0, 0, 1);

  & img {
    width: 2rem;
    margin-left: 1.2rem;
  }

  & input {
    background: none;
    flex-grow: 1;
    height: 5rem;
    margin-left: 0.5rem;
    border: none;
    outline: none;
    color: #4b6a9b;

    &::placeholder {
      font-family: "Space Mono";
      color: #4b6a9b;
    }
  }

  & button {
    background-color: #0079ff;
    padding: 1.5rem;
    border: none;
    border-radius: 1.1rem;

    font-family: "Space Mono";
    font-weight: 600;
    color: #fefefe;

    &:hover {
      cursor: pointer;
      background-color: #4b6a9b;
    }
  }

  &.dark {
    background-color: #1e2a47;

    & input {
      color: #ffffff;

      &::placeholder {
        color: #ffffff;
      }
    }
  }
`;

export default SearchBar;
