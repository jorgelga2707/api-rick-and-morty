 export function Character(character){
    return(
        <div>
            <h3>{character.name}</h3>
            <img src={character.image} alt="" />
            <p>{`Origin:${character.origin && character.origin.name}`}</p>
        </div>
    )

 }