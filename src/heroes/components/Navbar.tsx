import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {

    const navigate= useNavigate();
    const {user,logout}=useContext(AuthContext);

    const onLogout=()=>{
        logout();
        navigate("/login",{replace:true});
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        to="/marvel" replace
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        to="/search"
                    >
                        search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-secondary">{user?.name }</span>
                    <NavLink onClick={onLogout}
                        className={(({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        )}
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};
