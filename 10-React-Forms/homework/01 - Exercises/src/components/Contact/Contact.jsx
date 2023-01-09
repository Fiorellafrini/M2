import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export const validate = ({name,email,phone,subject,messaje}) => { //son los inputs 
  const errors = {};

  // errors.name = name === '' ? 'Se requiere un nombre' : errors.name  // SE PUEDE ESCRIBIR COMO EL IF DE ABAJO
  if(name === '') errors.name = "Se requiere un nombre";
  if(!regexEmail.test(email)) errors.email = "Debe ser un correo electrónico";
  if(phone<=0) errors.phone = "Sólo números positivos";
  if(!subject) errors.subject = "Se requiere un asunto";
  if(!messaje) errors.messaje = "Se requiere un mensaje";
  return errors; 
}

export default function Contact () {
  const [inputs, setInputs] = React.useState({
    name:"",
    email:"",
    phone:0,
    subject:"",
    messaje:""
  })

  const[errors, setErrors] = React.useState({
    name:"",
    email:"",
    phone:"",
    subject:"",
    messaje:""
  })

  const handleChange = (event) => {
    const property = event.target.name // property va cambiando, name, phone, etc.
    const value = event.target.value
    setInputs({
      ...inputs,
      [property]: value,
    }) // esto tiene diley
  

  setErrors(validate({
    ...inputs,
    [property]: value
  }))
  } // por el diley pongo el inputs viejo y le agrego el nuevo para mandar a validate.
 
  const handleSubmit = (event) => {
    event.preventDefault();

    if(Object.keys(errors).length){
      alert('Datos completos');
      setErrors({
        name:"",
        email:"",
        phone:"",
        subject:"",
        messaje:""
      });
      setInputs({
        name:"",
        email:"",
        phone:0,
        subject:"",
        messaje:""
      });
    }else{
      alert("Debe llenar todos los campos");

    }
  }
  
  return (
   <div>
     <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" placeholder="Escribe tu nombre..." name="name"
      value={inputs.name} onChange={handleChange} className={errors.name && "warning"} />
      {errors.name && <p className='danger'>{errors.name}</p>}
 
      
      <label htmlFor="email">Correo Electrónico:</label>
      <input type="text" placeholder="Escribe tu email..." name="email"
      value={inputs.email} onChange={handleChange} className= {errors.email && "warning"} />
      {errors.email && <p className='danger'>{errors.email}</p>}

      <label htmlFor="phone">Teléfono:</label>
      <input type="number" placeholder="Escribe un teléfono..." name="phone"
      value={inputs.phone} onChange={handleChange} className= {errors.phone && "warning"} />
      {errors.phone && <p className='danger'>{errors.phone}</p>}

      <label htmlFor="subject">Asunto:</label>
      <input type="text" placeholder="Escribe el asunto..." name="subject"
      value={inputs.subject} onChange={handleChange} className= {errors.subject && "warning"} />
      {errors.subject && <p className='danger'>{errors.subject}</p>}

      <label htmlFor="message">Mensaje:</label>
      <textarea name="message" cols='30' rows='10' placeholder="Escribe tu mensaje..." type="text"
      value={inputs.messaje} onChange={handleChange} className= {errors.message && "warning"}></textarea>
      {errors.messaje && <p className='danger'>{errors.message}</p>}

      <button type="submit">Enviar</button>


      </form>
   </div>

   )
}
