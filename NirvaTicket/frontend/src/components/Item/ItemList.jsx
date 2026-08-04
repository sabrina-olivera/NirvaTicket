import { useState, useEffect } from 'react'; ///////ADD
import ItemCard from './ItemCard';
import ItemEditForm from './ItemEditForm'; //ADD - EDIT

import { deleteItem, updateItem } from "../../api/itemApi"; //ADD- DELETE




function ItemList() {


  //API/ITEMS//////////////////////////////////////
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editingItem, setEditingItem] = useState(null); //ADD- EDIT


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


//////DELETE
const handleDelete = async (id) => {
    await deleteItem(id);

    setItems(prevItems =>
        prevItems.filter(item => item.id !== id)
    );
};


//////EDIT
//abrir formulario
const handleEdit = (item) => {
    setEditingItem(item);
    console.log(item)
};

//enviar datos
const handleUpdate = async (id, data) => {
    const updatedItem = await updateItem(id, data);

    setItems(prevItems =>
        prevItems.map(item =>
            item.id === id ? updatedItem : item
        )
    );

    setEditingItem(null);
};



   console.log(items)


  return (
    <>
      <h1>Inventario</h1>

      {
      editingItem && ( //si al principio editingItem = null (lo es), no muestra nada

        //cuando obtiene objeto, cumple condicion, muestra componente
        <ItemEditForm item={editingItem} 
        onUpdate={handleUpdate}
        />
      )
    }

    {/* ALTERNATIVA AL editingitem && ....
    if (editingItem) {
    return <ItemEditForm item={editingItem} />
    } */}


      {
      items.map( item => (
         <ItemCard //represento ProductCard
          key={item.id}
          item={item}  
          // izquieda nombre de la prop, derechala variable - en el componente la recibo con nombre de izquierda
          onDelete={handleDelete}
          onEdit={handleEdit}
         />
      ))}
    </>
  )





}                                               

export default ItemList