
const ItemCard = ( {item, onDelete, onEdit}  ) =>  { //props

  return (
    <>
    <div>
        <div>
          <h1>{item.name}</h1>
          <p>SKU: {item.sku}</p>
          <p>Stock: {item.stock}</p>


          <button type='button' onClick={() => onEdit(item)} > editar </button>



          <button type="button" onClick={() => onDelete(item.id)}> eliminar </button>

        </div>
    </div>
    </>
  )
}

export default ItemCard