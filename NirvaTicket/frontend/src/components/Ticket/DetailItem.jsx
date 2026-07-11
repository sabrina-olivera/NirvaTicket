import { useState } from 'react'

//maneja el estado de cada detalle del item, para sumar o restar cantidad
const DetailItem = ({ item }) => {

    const [cantidad, setCantidad] = useState(0);

    const add = () => setCantidad(cantidad + 1);
    const remove = () => { if (cantidad > 0) setCantidad(cantidad - 1); }

    return (
        <div>
            <h1>{item.name}</h1>
            <p>SKU: {item.sku}</p>
            <p>Stock: {item.stock}</p>
            <p>Cantidad: {cantidad}</p>
            <button onClick={add}> + </button>
            <button onClick={remove}> - </button>
        </div>
    )
}

export default DetailItem