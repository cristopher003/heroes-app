import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {

  const {heroeId}=useParams();
  const hero=useMemo(()=>getHeroById(heroeId?heroeId:""),[heroeId]);
  const navigate=useNavigate();

  const onNavigateBack=()=>{
    // window.history.back();
    navigate(-1);
  }

  if(!hero) return <Navigate to={"/marvel"}></Navigate>;

  return (
    <div className="row m-5">
      <div className="col-4">
        <img src={`/assets/heroes/${heroeId}.jpg`} 
        alt={hero.superhero} 
        className="img-thumbnail animate__animated animate__fadeInLeft" />

      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{hero.superhero}</h3>
        <hr></hr>
        <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
        <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
        <li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li>
        <li className="list-group-item"><b>Characters: </b>{hero.characters}</li>
        </ul>

        <div>
        <h5 className="mt-3">Characters</h5>
        <span className="badge text-bg-secondary">{hero.characters}</span>
        </div>

        <button className="btn btn-outline-info mt-3" onClick={()=>onNavigateBack()}>
        Regresar
      </button>
      </div>
    </div>
  )
}
