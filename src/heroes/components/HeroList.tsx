import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {

const heroes=useMemo(()=>getHeroesByPublisher(publisher),[publisher]);

  return (
    <>
    <div className="row" >
    
    {
      heroes.map((heroe)=>(
        <HeroCard 
        key={heroe.id}
        {...heroe} 
         ></HeroCard>

      ))
    }
    </div>
    </>
  )
}
