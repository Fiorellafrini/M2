import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Buscar = styled.button`
background-color: #1590c9;
background-size : 200px  200px;
height : 10vh;
width: 198vh;
display: flex;
justify-content: flex-end;
align-items: center;



button{
   column-width:100% ;
   background-color: #39ac43;
   margin-left: 8px;
   

}
`;


export default function SearchBar(props) {

   const [character, setCharacter] = useState('')
   
   const handleInput = (event) => { // handleInput es un manejador de eventos
   setCharacter(event.target.value)
  } // la propiedad value es lo que esta en el input (esos valores vienen de una Api). event.target.value es el evento que recibo al Setear el estado.
   // Seteo el estado (poniendo setCharacter, q es el nombre de la Fn)
 
   return (
      <Buscar>
      <div className={styled.SearchBar}>
      
      <Link to='/about'>
         <button>About</button>
      </Link>

      <Link to='/favorites'>
         <button>Favorites</button>
      </Link>

      <Link to='/home'><button>Home</button></Link>
      
         <input type='search' onChange={handleInput} /> 
      {/* cuando el input cambie, se ejecuta el handle -> onChange={handleInput}   */}

         <button onClick={()=>{props.onSearch(character)}}>Agregar</button>
      </div>
      </Buscar>
      
   );
}