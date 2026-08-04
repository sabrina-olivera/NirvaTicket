import { useState, useEffect } from "react";

function ItemEditForm({ item, onUpdate }) { //tiene que recibir funcion

    const [formData, setFormData] = useState({});

        useEffect(() => {
        setFormData({
            name: item.name,
            sku: item.sku,
            stock: item.stock,
            price: item.price
        });
    }, [item]);


    const handleChange = (e) => { //e de evento. cambia solamente la propiedad cuyo nombre tenga el input
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    await onUpdate(item.id, formData);
};


    return (
        <div>

        <form onSubmit={handleSubmit}>

            <h2>Editando {item.name}</h2>

            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <input
                name="sku"
                value={formData.sku}
                onChange={handleChange}
            />

            <input
                name="stock"
                value={formData.stock}
                onChange={handleChange}
            />

            <input
                name="price"
                value={formData.price}
                onChange={handleChange}
            />

            <button type='submit'>guardar cambios</button>


          </form>

        </div>
    );
}

export default ItemEditForm;