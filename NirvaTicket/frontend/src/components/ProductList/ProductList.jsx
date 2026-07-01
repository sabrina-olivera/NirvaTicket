import ProductCard from './ProductCard';

function ProductList() {
  return (
    <>
      <h1>Inventario</h1>
      <ProductCard name='Teclado Gamer' price={2300}/>
      <ProductCard name='Libro' price={550}/>
    </>
  )
}

export default ProductList