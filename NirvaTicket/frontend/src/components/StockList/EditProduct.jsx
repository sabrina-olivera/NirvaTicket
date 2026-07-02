import React from 'react'

export const EditProduct = () => {

    const [stock, setStock] = useState(item.stock)

    const add = () => {
        let nuevoStock = stock + 1
        setStock(nuevoStock);
    }

    const remove = () => {
    if (stock > 0) {
        let nuevoStock = stock - 1
        setStock(nuevoStock);
    }
    }


  return (
    <div>
          <h1>{item.name}</h1>
          <p>SKU: {item.sku}</p>
          <p>Stock: {stock}</p> 
          {/* el mismo nombre que el State */}
          
          <button onClick={add} type='button' > + </button>
          <button onClick={ remove} type='button' className='btn btn-dark'> - </button>
    </div>
  )
}
