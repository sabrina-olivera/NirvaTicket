import {useState} from 'react'

const Detail = ({item}) =>  {

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
          <h1>{item.name}</h1>
          <p>SKU: {item.sku}</p>
          <p>Stock: {item.stock}</p>
          {/* el mismo nombre que el State */}

          <p>Cantidad: {cantidad}</p>
          <button onClick={add} type='button' > + </button>
          <button onClick={ remove} type='button' className='btn btn-dark'> - </button>
    </div>
  )
}

export default Detail