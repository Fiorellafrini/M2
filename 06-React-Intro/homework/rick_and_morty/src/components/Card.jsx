//este card hace una card reutilizable, por eso hace props y no directamente una persona.
// import ParseOptions from "eleventy-plugin-toc/src/ParseOptions";
import styled from "styled-components";
import { Link } from 'react-router-dom';
// import {connec} from 'react-redux';
import { deletePersonaje, addPersonaje } from "../redux/actions";
import { useDispatch, useSelector} from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";




const Rick = styled.div`
   background-image: url('https://i.pinimg.com/564x/8e/a8/10/8ea810170b28962b33fb228706a99149.jpg');
   margin-bottom: 2%;
   width: 100%;

   

 button{
   margin-top: 8px;
   margin-left: 8px;
   margin-bottom: 8px;
   display:flex;
   font-size: 15px;
   background-image: -webkit-linear-gradient(top,  #302d2f, #6fff91);
   background-image: -moz-linear-gradient(top, #302d2f, #6fff91);
   background-image: -ms-linear-gradient(top, #302d2f, #6fff91);
   background-image: -o-linear-gradient(top,  #302d2f, #6fff91);
   background-image: linear-gradient(to bottom,  #302d2f, #6fff91);
 
 }


 h2 {
   font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 35px;
  background:rgb(31, 74, 48); ;color:black; padding:10px;border:2px;
  
 }

 h3 {
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   font-size: 20px;

  }

 img {
   background-image: url ('https://rickandmortyapi.com/api/character/avatar/1.jpeg');
   background-size: cover; 
   border-radius: 50%; 
   
 }
  
 /* :hover { */
  
   /* img{
      transition-property: 5s;
      border-radius: 250px;
      filter: drop-shadow(2);
      border:ridge 10px;
      border-color: #347f726d;
      color:  #0c1715;
      
   }
      /* filter: drop-shadow(1); */
      /* border:solid 5px;
      color: #0c1715; 
      border-color: #347f72;  
         
   } */
`;


export default function Card(props,onClose) { // name={Rick.name}species={Rick.species},etc SON LAS PROPS.
   
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector((state)=>state.myFavorites);

   const handleFavorite= (id) =>{
      if(isFav){
         setIsFav(false)
         dispatch(deletePersonaje(id))
      }else{
         setIsFav(true)
         dispatch(addPersonaje(id))
      }
   }

   useEffect(() => {
      myFavorites.forEach((id) => {
         if (id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
    <Rick>
      
       <div className={styled.card}>   
       <button onClick={()=>{onClose(props.name)}}>X</button>
       {isFav ? (
       <button onClick={()=>handleFavorite(props.id)}>❤️</button> ) : (
       <button onClick={()=>handleFavorite(props.id)}>🤍</button>)}
   
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
            <h3>{props.species}</h3>
            <h3>{props.gender}</h3>
            <img src={props.image} alt="" />
      </div>
    </Rick>
      
      
   );
   
      // const mapDispatchToProps = (dispatch) => {
      //    return {
      //       addPersonaje:()=>{dispatch(addPersonaje())}
         
      //    }

      // }



}
  