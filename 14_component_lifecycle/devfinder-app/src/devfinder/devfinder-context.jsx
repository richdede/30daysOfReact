import { useReducer, useState } from "react";
import { createContext } from "react";
import { createGlobalStyle } from "styled-components";

export const DevfinderContext = createContext({
  darkMode: Boolean,
  isLoading: Boolean,
  userData: {},
  onToggleTheme: () => {},
  onFetchUser: () => {},
});

function handleData(state, action) {
  if (action.type === "TOGGLE_DARKMODE") {
    const newValue = { ...state, darkMode: !state.darkMode };
    return newValue;
  }

  if (action.type === "UPDATE_USERINFO") {
    const newValue = { ...state, userData: { ...action.payload.data } };
    return newValue;
  }
}

const DevfinderContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, dataDispatch] = useReducer(handleData, {
    darkMode: true,
    userData: {},
  });

  function toggleDarkMode() {
    dataDispatch({
      type: "TOGGLE_DARKMODE",
    });
  }

  function updateUserInfo(userInfo) {
    dataDispatch({
      type: "UPDATE_USERINFO",
      payload: {
        data: { ...userInfo },
      },
    });
  }

  async function handleUserData(username) {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://devfinder-backend-vmqb.onrender.com/gituser?user=" + username
      );
      const data = await response.json();

      updateUserInfo(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      return err.message;
    }
  }

  const ctxValue = {
    darkMode: data.darkMode,
    isLoading: isLoading,

    userData: data.userData,
    onToggleTheme: toggleDarkMode,
    onFetchUser: handleUserData,
  };

  return (
    <>
      <GlobalStyle $dark={data.darkMode} />
      <DevfinderContext.Provider value={ctxValue}>
        {children}
      </DevfinderContext.Provider>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    & li {
    list-style: none;
    }

    transition: all .2s;
  } 

  html {
    font-size: 62.5%;
  }

  body {
    display: flex;
    justify-content: center;
    background-color: ${(props) => (props.$dark ? "#141d2f" : "#F6F8FF")};
    width: 100%;
    height: 100vh;

    margin: 3rem 0;
  }
`;

export default DevfinderContextProvider;
