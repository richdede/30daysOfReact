import { useContext } from "react";

import { DevfinderContext } from "../devfinder/devfinder-context";

import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";
import styled from "styled-components";

const Header = () => {
  const { darkMode, onToggleTheme } = useContext(DevfinderContext);

  return (
    <HeaderStyled className={darkMode && "dark"}>
      <h1>devfinder</h1>
      <button onClick={onToggleTheme}>
        {darkMode ? "light" : "dark"}{" "}
        <img src={darkMode ? sunIcon : moonIcon} alt="moon icon" />
      </button>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    font-family: "Space Mono";
    font-size: 2.6rem;
  }

  & button {
    background: none;
    border: none;

    display: flex;
    gap: 1rem;

    text-transform: uppercase;
    font-family: "Space Mono";
    font-weight: 600;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
    color: #697c9a;

    &:hover {
      cursor: pointer;
    }
  }

  &.dark {
    & h1,
    & button {
      color: #ffffff;
    }
  }
`;
