import {useState} from 'react'

const Detail = ({items}) =>  {

    const [cantidad, setCantidad] = useState(0)

    const add = () => {
        let nuevaCantidad = cantidad + 1
        setCantidad(nuevaCantidad);
    }

    const remove = () => {
    if (cantidad > 0) {
        let nuevaCantidad = cantidad - 1
        setCantidad(nuevaCantidad);
    }
    }

  return (
    <div>
          <h1>{items.name}</h1>
          <p>SKU: {items.sku}</p>
          <p>Stock: {items.stock}</p>

          <p>Cantidad: {cantidad}</p>
          <button onClick={add} type='button' > + </button>
          <button onClick={ remove} type='button' className='btn btn-dark'> - </button>
    </div>
  )
}

export default Detail