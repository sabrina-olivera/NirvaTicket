import Detail from './Detail';
import ClientRegister from './ClientRegister'
import { items } from '.../data/items' 

function Ticket({items}) {
  return (
    <>
    
      <h1>Cobrar</h1>
      {/* si no hay cliente en sesion, mostrar botones:
        - registrar cliente (1)
        - ingresar dni cliente. (2)
      
      si elige (1), ir a
      <ClientRegister/> */}


      <Detail items={items} />
      {/* cuando haya cliente en sesión, mostrar 
      <Detail/> 
      // agregar botón de generar factura
      */}

    </>
  )
}

export default Ticket