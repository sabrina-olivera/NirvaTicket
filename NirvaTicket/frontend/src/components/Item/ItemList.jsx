import { useState, useEffect } from 'react'; ///////ADD
import ItemCard from './ItemCard';


function ItemList() {


  //ADD//////////////////////////////////////
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('http://localhost:8080/api/items')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los items');
        }
        return response.json();
      })
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando items...</p>;
  if (error) return <p>Error: {error}</p>;
////////////////////////////////

   console.log(items)


  return (
    <>
      <h1>Inventario</h1>
      {
      items.map( item => (
         <ItemCard //represento ProductCard
          key={item.id}
          item={item}  
          // izquieda nombre de la prop, derechala variable - en el componente la recibo con nombre de izquierda
         />
      ))}
    </>
  )





}                                               

export default ItemList