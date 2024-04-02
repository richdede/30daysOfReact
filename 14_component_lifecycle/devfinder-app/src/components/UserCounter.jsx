import { useContext } from "react";
import { DevfinderContext } from "../devfinder/devfinder-context";
import styled from "styled-components";

const UserCounter = ({ infoTitle, infoCount }) => {
  const { darkMode } = useContext(DevfinderContext);
  return (
    <LiStyled className={darkMode && "dark"}>
      <h4>{infoTitle}</h4>
      <p>{infoCount}</p>
    </LiStyled>
  );
};

const LiStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & h4 {
    font-size: 1.2rem;
    font-weight: 200;
    color: #4b6a9b;
  }

  & p {
    font-size: 1.4rem;
    font-weight: bold;
  }

  &.dark {
    & h4,
    & p {
      color: #ffffff;
    }
  }
`;

export default UserCounter;
