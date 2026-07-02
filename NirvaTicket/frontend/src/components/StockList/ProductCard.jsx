
const ProductCard = ( {item}  ) =>  { //props


  console.log(item)
  
  // let cantidad = 1;
  // const  sumar = () => {
  //   cantidad = cantidad ++;
  // }

  return (
    <>
    <div>
        <h1>Artículo</h1>
        <div>
          <h1>{item.name}</h1>
          <p>SKU: {item.sku}</p>
          <p>Stock: {item.stock}</p>
        </div>
    </div>
    </>
  )
}

export default ProductCard