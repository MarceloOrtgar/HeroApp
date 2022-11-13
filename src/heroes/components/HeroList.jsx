import { getHeroesByPubliser } from "../helpers"
import { HeroCard } from "./"


export const HeroList = ({publisher}) => {

    const heroes=getHeroesByPubliser(publisher)

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
       {
        heroes.map(hero=>(
       <HeroCard key={hero.id}
        {...hero}
       />
       ))}
    </div>
  )
}
