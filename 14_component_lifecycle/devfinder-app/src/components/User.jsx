import { useContext } from "react";
import { DevfinderContext } from "../devfinder/devfinder-context";

import UserCounter from "./UserCounter";
import UserSocial from "./UserSocial";
import Loading from "./Loading";

import locationIcon from "../assets/icon-location.svg";
import websiteIcon from "../assets/icon-website.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import companyIcon from "../assets/icon-company.svg";
import styled from "styled-components";

const User = () => {
  const { userData, isLoading, darkMode } = useContext(DevfinderContext);
  const {
    avatar,
    bio,
    blog,
    company,
    creation_date,
    followers,
    following,
    location,
    name,
    repositories,
    twitter,
    username,
  } = userData;

  return (
    <>
      <StyledMain className={darkMode && "dark"}>
        {isLoading ? (
          <Loading />
        ) : userData.username ? (
          <>
            <div id="desktopImgBox">
              <img
                src={
                  avatar ||
                  "https://cdn1.iconfinder.com/data/icons/creatype-user-interface-two-colour/64/2_avatar_persone_profile_user-512.png"
                }
                alt={`${name} avatar`}
              />
            </div>
            <div id="contentContainer">
              <header>
                <img
                  src={
                    avatar ||
                    "https://cdn1.iconfinder.com/data/icons/creatype-user-interface-two-colour/64/2_avatar_persone_profile_user-512.png"
                  }
                  alt={`${name} avatar`}
                />
                <section>
                  <span>
                    <h2>{name || "Not Available"}</h2>
                    <h3>{username || "Not Available"}</h3>
                  </span>
                  <span>
                    <p>
                      {`Joined ${creation_date[0]} ${creation_date[1]} ${creation_date[2]}` ||
                        "Not Available"}
                    </p>
                  </span>
                </section>
              </header>

              <h4 id="bio">{bio || "This user has no bio."}</h4>

              <ul id="userCounters">
                <UserCounter infoTitle="Repos" infoCount={repositories} />
                <UserCounter infoTitle="Followers" infoCount={followers} />
                <UserCounter infoTitle="Following" infoCount={following} />
              </ul>

              <ul id="userSocials">
                <UserSocial socialIcon={locationIcon} socialInfo={location} />
                <UserSocial
                  link={true}
                  socialIcon={websiteIcon}
                  socialInfo={blog}
                />
                <UserSocial socialIcon={twitterIcon} socialInfo={twitter} />
                <UserSocial socialIcon={companyIcon} socialInfo={company} />
              </ul>
            </div>
          </>
        ) : (
          <>
            {userData.error ? (
              <p id="noFetchedUser">That user doesn&apos;t exist.</p>
            ) : (
              <p id="noFetchedUser">Search for a GitHub user...</p>
            )}
          </>
        )}
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  width: 100%;
  margin-top: 1.5rem;
  padding: 3.3rem 2rem;

  background-color: #fefefe;
  border-radius: 1.5rem;
  box-shadow: 0px 9px 75px -45px rgba(0, 0, 0, 0.68);

  font-family: "Space Mono";

  & #desktopImgBox {
    display: none;

    & img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
  }

  & header {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    & img {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
    }

    & section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & h3 {
        margin-bottom: 0.6rem;
        color: #0079ff;
        font-weight: 200;
      }

      & p {
        font-size: 1.3rem;
        color: #697c9a;
      }
    }
  }

  & #bio {
    margin-top: 3rem;

    font-size: 1.2rem;
    line-height: 2rem;
    color: #4b6a9b;
    font-weight: 200;
  }

  & #userCounters {
    background-color: #f6f8ff;
    border-radius: 1rem;
    margin-top: 3rem;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

  & #userSocials {
    margin-top: 1rem;
  }

  & #noFetchedUser {
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }

  &.dark {
    color: white;
    background-color: #1e2a47;

    & header {
      & section {
        & p {
          color: white;
        }
      }
    }

    & #bio {
      color: #ffffff;
    }

    & #userCounters {
      background-color: #141d2f;
    }
  }

  @media (min-width: 768px) {
    padding: 3rem 3rem;

    & header {
      gap: 2.5rem;

      & img {
        width: 8rem;
        height: 8rem;
      }
    }

    & #userSocials {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }

  @media (min-width: 1100px) {
    display: flex;
    gap: 2rem;
    & #desktopImgBox {
      display: block;
      height: 100%;
    }

    & #contentContainer {
      width: 100%;

      & header {
        & img {
          display: none;
        }

        & section {
          width: 90%;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
  }
`;

export default User;
