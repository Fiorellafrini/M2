export default function Card({name,species,gender,image,onClose}) { // name={Rick.name}species={Rick.species},etc SON LAS PROPS.
   
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}
