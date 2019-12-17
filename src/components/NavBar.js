import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import FirstPage from "./FirstPage";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
          <div><div className="haamudiv"></div>
          <button className="button1" onClick={() => loginWithRedirect({})}>Log in</button></div>
      )}
      {isAuthenticated && <button className="button2" onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
          <FirstPage />
      )}
    </div>
  );
};

export default NavBar;