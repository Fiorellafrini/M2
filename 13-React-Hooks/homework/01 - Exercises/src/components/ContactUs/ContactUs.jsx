import React from "react";
import { useDispatch} from 'react-redux';
import { enviarForm } from "../../redux/actions/actions";


const ContactUs = () => {
const dispatch = useDispatch();

const [form, setForm] = React.useState({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
});

 const handleInput = (event)  => {
  const property= event.target.nombre;
  const value= event.target.value;

  setForm({
    ...form,
    [property]:value,
  })
 }

 const handleSubmit = () => {
  dispatch(enviarForm(form))
    setForm ({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
    })
 }

  return (
    <div className="contactBg">
      <input name="nombre" onChange= {handleInput} ></input>
      <input name="email" onChange= {handleInput} ></input>
      <input name="asunto" onChange= {handleInput} ></input>
      <input name="mensaje" onChange= {handleInput} ></input>
      <button onClick={handleSubmit}>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
