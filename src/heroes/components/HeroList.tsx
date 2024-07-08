import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ({publisher}) => {

const heroes=getHeroesByPublisher(publisher);

  return (
    <>
    <div className="row" >
    
    {
      heroes.map((heroe,i)=>(
        <div className="col-4 p-2" key={i}>
        <div className="card" >
          <img src={"/"+heroe.id+".jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{heroe.superhero}</h5>
            <h6 className="card-subtitle mb-2 text-muted ">{heroe.publisher}</h6>
            <p className="card-text">{heroe.alter_ego}</p>
          </div>
        </div>
        </div>
      ))
    }
    </div>
    </>
  )
}
