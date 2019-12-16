import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import FirstPage from "./FirstPage";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
          <FirstPage />
      )}
    </div>
  );
};

export default NavBar;