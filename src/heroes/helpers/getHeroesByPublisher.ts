import  {heroes}  from "../data/heroes";


export const getHeroesByPublisher = (publisher:string) => {
  
  const validPiblisher=["DC Comics","Marvel Comics"];

  if (!validPiblisher.includes(publisher))
    throw new Error("Error de publisher");

  return heroes.filter(heroe=>heroe.publisher===publisher)
}
