import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import styled from 'styled-components';


const Contenedor = styled.div`
  background-color:rgb(56, 120, 80);
   margin-bottom: 2%;
   width: 100%;
   
`;



export default function Favorites(props){
const myFavorite = useSelector((state)=>state.myFavorite)
const characters = props.characters.filter((personaje)=>{
    return myFavorite.includes(personaje.id)
})
  


return(
        <Contenedor>

            <div className={styled.card}>
         {characters.map(({name,species,gender,image,id},onClose)=>{
            return (
             <Card
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={onClose}
               // onClose={() => window.alert('Esmulamos que se cierra la card')}
            />   
            );  
         })} 
      </div>
      </Contenedor>
    )
}