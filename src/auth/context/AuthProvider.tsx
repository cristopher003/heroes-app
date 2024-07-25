
import { ReactNode, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'


const init=()=>{
  const user=JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user:user
  }
}

export const AuthProvider = ({children} ) => {

    const [state, dispatch] = useReducer(authReducer, {},init);

    const login=(name:string="")=>{
      const action={type:types.login, payload:{name}};
      dispatch(action);
      localStorage.setItem("user",JSON.stringify({name}));
  
    }
     
    const logout=()=>{
      localStorage.removeItem('user');
      dispatch({type:types.logout});

    }

  return (
    <AuthContext.Provider value={{...state,login:login,logout:logout }}>
        {children}
    </AuthContext.Provider>
  )
}
