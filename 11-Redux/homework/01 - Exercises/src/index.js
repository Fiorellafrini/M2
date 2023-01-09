const { createStore } = require("redux"); //IMPORTA EL CRREATE STORE
const contador = require("./reducer"); //contador es la Fn reducer del ejercicio
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor= document.querySelector('#valor');  //

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  const contador= store.getState().contador // getstate  es el metodo que nos trae el estado. El estado es un objeto, por eso le paso la propiedad contador.


  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML=contador; // es un spam, por eso pongo innerHTML. Esto es el seteo.
}

// Ejecutamos la función 'renderContador':
renderContador();
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:

store.subscribe(renderContador); // indico que quiero que suceda cuando cambie de estado, escucha los cambios y actualiza

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

// ME FIJO LO QUE HACEN LOS BOTONES EN LA CARPETA HTML

const incrementobutton = document.querySelector('#incremento'); // uso document.query porque usa webpack
incrementobutton.addEventListener('click',()=>{ //  espero el evento click, cuando se hace
  store.dispatch(incremento()); // ejecuto el dispatch de una ACTION. pongo incremento() pq esa fn me retorna la action y quiero ejecutarla.
}); 

const decrementobutton = document.querySelector('#decremento');
decrementobutton.addEventListener('click',()=>{
  store.dispatch(decremento());
});

const incrementoImpar = document.querySelector('#incrementoImpar');
incrementoImpar.addEventListener('click', () =>{
// valor.innerHTML %2 !== 0 && store.dispatch(incremento());
store.getState().contador %2 !== 0 && store.dispatch(incremento())

})

const incrementoAync = document.querySelector('#incrementoAsync');
incrementoAync.addEventListener('click',()=>{
  setTimeout(() =>{
    store.dispatch(incremento());//recibe una cb en el primer argumentoo, y en el segundo el tiempo
  }, 1000); 
});