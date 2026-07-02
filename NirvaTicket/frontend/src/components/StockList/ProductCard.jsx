
const ProductCard = ( {item}  ) =>  { //props

  return (
    <>
    <div>
        <div>
          <h1>{item.name}</h1>
          <p>SKU: {item.sku}</p>
          <p>Stock: {item.stock}</p>
          <button type='button' > editar </button>
          <button type='button' > ocultar </button>
        </div>
    </div>
    </>
  )
}

export default ProductCard