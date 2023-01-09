// import React from "react";

const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export default function Validate (inputs) {
 const errors = {}
//  creo un obj vacio llamado error que si tiene errores lo lleno de propiedades, si no tiene nada lo retorno vacio
if(!inputs.username){
    errors.username = 'El username no debe estar vacio' // si el inputs( que es donde escribo) esta vacio, es decir no hay nada(!inputs), el errors.username retornar  eso.
}
else if(!regexUsername.test(inputs.username)){
    errors.username = 'Debe ser un correo electronico'
}
else if(inputs.username.length >35){
    errors.username = 'El username no puede tener mas de 35 caracteres'
}
else if(!inputs.password){
    errors.password = 'El password no debe estar vacio'
}
else if(!regexPassword.test(inputs.password)){
    errors.password = 'El password debe tener una longitud entre 6 y 10 caracteres y  al menos 1 caracter especial'
    }

 return errors // si no entra a ninguno de los if de arriba me devuelve un obj vacio.
 // si entra a alguno me retorna el mensaje de ese if.
}

