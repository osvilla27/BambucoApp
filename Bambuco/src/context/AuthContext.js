import React, { createContext, useState } from "react";
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export const AuthContext = createContext();

  
export const AuthProvider = ({ children }) => {

    const register = (email, password, username, first_name, last_name) => {
        axios
          .post(`${BASE_URL}/signup`, {
            email, 
            password,
            username,
            first_name, 
            last_name, 
          })
          .then(res => {
            let userInfo = res.data;
            console.log(userInfo)
          })
          .catch(e => {
            console.log(`register error ${e}`);
          });
      }
    return (
        <AuthContext.Provider 
          value={{
            register
          }}>
          {children}
        </AuthContext.Provider>
    )
}
