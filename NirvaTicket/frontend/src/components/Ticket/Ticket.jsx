import Detail from './Detail';
import ClientRegister from './ClientRegister'

// se muestra el sector facturación con datos ya cargados desde frontend\src\data\items.js para mostrar el funcionamiento de useState

function Ticket({items}) {
  console.log(items)
  return (
    <>  
      <h1>Cobrar</h1>
      <Detail items={items} />

    </>
  )
}

        // si no hay cliente en sesion, mostrar botones:
        // - registrar cliente (1)
        // - ingresar dni cliente. (2)
        //   si elige (1), ir a <ClientRegister/>
        //   cuando haya cliente en sesión, mostrar <Detail/> 
        //   agregar botón de generar factura

export default Ticket