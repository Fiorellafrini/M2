import './App.css'

import Cards from './components/Cards.jsx'
import H1 from './components/H1.jsx'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Form from './components/Form'
import Favorites from './components/Favorites'
import Detail from './components/Detail.jsx'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

function App() {

   const [access, setAccess] = useState(false);
   const username = 'ejemplo@gmail.com';
   const password = '1password';
   const navigate = useNavigate();
   
   function login(userData) { // esta fn la pasamos al form para que chequee
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate('/home'); 
      }
   }
   // es como una especie de link que nos redirige , pero dentro de las fns
   //    alert('Bienvenidos a nuestra App')
   //    }else{
   //       alert('username y password incorrectos')
   //    }
   // }
   
   useEffect(() => {
      !access && navigate('/')
   },[access]);

    const location = useLocation()

    const [characters, setCharacters] = useState([]);

  function onSearch(character) {
   fetch(`https://rickandmortyapi.com/api/character/${character}`) // fetch es una Fn que hace una peticion a un servidor(la url)
      .then((response) => response.json()) // .then(response) es la respuesta, el plan de accion. response.json es la respuesta que saca de json
      .then((data) => { //toma la informacion (data)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]); //setea el estado, que es una copia (...oldChars(guarda los datos viejos) + la data(y almacename los nuevos))
         } else {
            window.alert('No hay personajes con ese ID'); // como es un plan de accion, cuando no hay nada ejecuta esta alert.
         }
      });
  }

 function onClose(character) { 
   setCharacters(characters.filter((elemento)=> elemento.name !== character)
   )
 }


return (
    <div className='App' style={{ padding: '25px' }}>
      <H1 />
      {location.pathname ==='/' ? null: <Nav onSearch={onSearch} />}
      {/* si el location es igual a barra no lo muestres, sino si */}
      <Routes>
         <Route path='/' element={<Form login={login} />}></Route>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
         <Route path='/about' element={<About />}></Route>
         <Route path='/favorites' element={<Favorites characters={characters} onClose={onClose} />}></Route>
         <Route path='/detail/:detailId' element={<Detail />}></Route>
      </Routes>
      
    </div>
  );
}
export default App;
