import ItemCard from './ItemCard';


function ItemList({items}) { //desestructurando ese objeto y agarrando solo el array que necesitás.
   console.log(items)
  return (
    <>
      <h1>Inventario</h1>
      {
      items.map( 
        item => (
         <ItemCard //represento ProductCard
          item={item}  
          // izquieda nombre de la prop, derechala variable - en el componente la recibo con nombre de izquierda
         />
      ))}
    </>
  )
}                                               

export default ItemList