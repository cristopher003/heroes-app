import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {
  const navigate=useNavigate();
  const {login} = useContext(AuthContext);

  const onLogin=()=>{
    login("hola");
    const lastPath=localStorage.getItem('lastPath')||'/';
    navigate(lastPath,{replace:true});
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr></hr>
      <button className="btn btn-primary" onClick={onLogin}>Login</button>
    </div>
  )
}
