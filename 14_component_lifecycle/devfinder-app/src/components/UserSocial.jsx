import { useContext } from "react";
import styled from "styled-components";
import { DevfinderContext } from "../devfinder/devfinder-context";

const UserSocial = ({ socialIcon, socialInfo, link }) => {
  const { darkMode } = useContext(DevfinderContext);
  return (
    <LiStyled className={darkMode && "dark"}>
      <p className={!socialInfo ? "notAvailable" : ""}>
        <img src={socialIcon} />
      </p>
      <h4 className={!socialInfo ? "notAvailable" : ""}>
        {socialInfo ? (
          link === true ? (
            <a href={socialInfo} target="__blank">
              {socialInfo}
            </a>
          ) : (
            socialInfo
          )
        ) : (
          "Not Available"
        )}
      </h4>
    </LiStyled>
  );
};

const LiStyled = styled.li`
  margin-top: 1.5rem;
  display: flex;
  gap: 2rem;

  & p {
    width: 1.1rem;
  }

  & h4 {
    font-size: 1.1rem;
    font-weight: 200;
    color: #4b6a9b;

    & a {
      &:link {
        color: #4b6a9b;
      }
    }
  }

  & .notAvailable {
    filter: invert(50%) sepia(12%) saturate(985%) hue-rotate(178deg)
      brightness(93%) contrast(85%);
    color: #697c9a;
  }

  &.dark {
    & p img {
      filter: brightness(0) saturate(100%) invert(93%) sepia(93%) saturate(27%)
        hue-rotate(92deg) brightness(106%) contrast(106%);
    }

    & h4 {
      color: #ffffff;

      & a {
        &:link {
          color: #ffffff;
        }
      }
    }
  }
`;

export default UserSocial;
