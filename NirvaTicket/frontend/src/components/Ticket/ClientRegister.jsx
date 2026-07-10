import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'

const ClientRegister = () => {

  const [ client, setClient ] = useState({ name: '', mail: '', dni: ''});
  const navigate = useNavigate();

  const handlerForm = (e) => {
    e.preventDefault();

    if(client.name.trim() == ""){
      alert('Complente el nombre');
      return;
    }
    if( !client.mail.includes('@') || !client.mail.includes('.')){
      alert('Ingrese un Email Valido');
      return;
    }


    // Enviar a la API los datos
    localStorage.setItem('client', JSON.stringify({
      name: client.name,
      mail: client.mail,
      dni: client.dni,

    }));
    navigate('/Ticket');
  }

  const handlerChange = (event) => {
    setClient( {...client, [event.target.name] : event.target.value })
  }


  return (
    <main>
        <h1>Registrar Cliente </h1>
        <div>
          <div className="col-sm-8">
              <form onSubmit={ handlerForm}>
                
                <label htmlFor="name">Nombre</label>
                <input 
                    value={client.name}
                    onChange={handlerChange }
                    name='name' //leer input
                    type="text"
                  />
       
                <label htmlFor="email">Email</label>
                <input 
                    value={client.email}
                    onChange={handlerChange }
                    name='email' //leer input
                    type="email"
                  />

                 <label htmlFor="password">Dni</label>
                 <input 
                    value={client.dni}
                    onChange={handlerChange }
                    name='dni' 
                    type="number"
                  />


                <button className='btn btn-dark' type='submit'>Registrar Cliente</button>
              </form>
          </div>
        </div>
    </main>
  )
}

export default ClientRegister