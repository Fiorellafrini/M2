import Card from './Card';
import styled from 'styled-components';


const Contenedor = styled.div`
  background-color:rgb(56, 120, 80);
   margin-bottom: 2%;
   width: 100%;
   
`;

export default function Cards(props) {
   const { characters } = props; //characters es un array de personajes
   return (
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

