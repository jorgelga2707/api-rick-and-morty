 export function Character(character){
    return(
        <div>
            <h3>{character.name}</h3>
            <div className="img-container">
                <img src={character.image} alt="" />
            </div>
            <p>{`Origin:${character.origin && character.origin.name}`}</p>
        </div>
    )

 }