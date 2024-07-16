import { HeroCard } from "../components/HeroCard"

import { FormEvent } from "react";
import { useForm } from "../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";


export const SearchPage = () => {

  const navigate=useNavigate();
  const location=useLocation();
  const {q=''}=queryString.parse(location.search);

  const { searchText , onInputChange } = useForm({searchText:q});

  const heroes=getHeroByName(q);

  const onSerach=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    // if(searchText.trim().length===0) return;
      navigate(`?q=${searchText}`);

  }

  return (
    <>
    <h1>Search</h1>
    <hr></hr>
    <div className="row m-2">
    <div className="col-5">
        <h4>Searching</h4>
      <hr></hr>
      <form onSubmit={onSerach} className="row g-3"> 
          <input onChange={onInputChange} type="text" value={searchText} className="form-control"
           name="searchText" placeholder="Buscar" autoComplete="off"/>
          <button  className="btn btn-outline-primary">Buscar</button>
      </form>

    </div>
    <div className="col-7">
        <h4>Results</h4>
      <hr></hr>

      
      {
        (!heroes)
        ? (<div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
        ) : (heroes.length===0) && (<div className="alert alert-danger" >
          No hay resultados {q}
        </div>)
      }
  

     
      {
        heroes.map((heroe)=>(
          <HeroCard 
          key={heroe.id}
          {...heroe} 
           ></HeroCard>
  
        ))
      }
      
    </div>
    </div>
    </>
  )
}
