import ProductCard from './ProductCard';


function ProductList({items}) {
   console.log(items)
  return (
    <>
      <h1>Inventario</h1>
      {
      items.map( 
        item => (
         <ProductCard 
          item={item} 
         />
      ))}
    </>
  )
}                                               

export default ProductList