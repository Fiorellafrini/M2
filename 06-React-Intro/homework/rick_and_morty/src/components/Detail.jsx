import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

export default function Detail() {

const {detailId} = useParams(); 
const [character, setCharacter]= useState({})


React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

return (
   <div>
     <h1>Name:{character.name}</h1>
     <h3>Status:{character.status}</h3>
     <h3>Specie:{character.species}</h3>
     <h3>Gender:{character.gender}</h3>
     <h3>{character.origin?.Name}</h3>
     <img src={character.image} alt={character.name} />
   </div>

)
}
