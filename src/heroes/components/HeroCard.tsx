import { Link } from "react-router-dom";

const CharactersByHero = ({alter_ego,characters})=>{
    if(alter_ego===characters) return(<></>);  
    return (<p className="m-2 ">{ characters }</p>);
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const urlImage = `/assets/heroes/${id}.jpg`;

    return (
        <div className="col-3 p-2" key={id}>
            <div className="card" >
                <div className="row no-gutters">
                    <img src={urlImage} className="card-img-top animate__animated animate__fadeIn" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title m-2 ">{superhero}</h5>
                        <h6 className="card-subtitle m-2 text-muted ">{publisher}</h6>
                        <p className="card-text m-2 ">{alter_ego}</p>
                     
                        <CharactersByHero alter_ego={alter_ego} characters={characters}></CharactersByHero>

                        <p className="cart-text m-2 ">
                           <small className="text-muted">{ first_appearance }</small> 
                        </p>

                        <Link to={`/hero/${id}`} >
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
