import React, { createContext, useState, useEffect, useRef } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {

  const [domain, setDomain] = useState("http://127.0.0.1:8000/api/");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ userObj, setUserObj ] = useState();

  const globalContext = {
    domain,
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
  }
    
    return (
        <Context.Provider 
          value={
            globalContext
          }>
          {children}
        </Context.Provider>
    )
}