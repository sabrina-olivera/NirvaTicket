
import {useState} from 'react'
const Detail = ( { name, price }  ) =>  {

  const [cantidad, setCantidad] = useState(0);
    
  const  sumar = () => {
    let nuevaCantidad = cantidad + 1
    setCantidad(nuevaCantidad)
  }

  return (
    <div>
        <h1>Detalle</h1>
        <div className='card p-2'>
          <h4>  { name }</h4>
          <h5>$ { price }</h5>
          <p> Cantidad 
              <span> { cantidad} </span>
          </p>
          
          <button onClick={sumar} type='button' > + </button>
        </div>
    </div>
  )
}

export default Detail