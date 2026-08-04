import { useState } from "react";

function ItemCreateForm({ onCreate }) {

    const [formData, setFormData] = useState({
        name: "",
        sku: "",
        stock: "",
        price: ""
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        onCreate(formData);
    };


    return (
        <form onSubmit={handleSubmit}>

            <input
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
            />

            <input
                name="sku"
                placeholder="SKU"
                value={formData.sku}
                onChange={handleChange}
            />

            <input
                name="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
            />

            <input
                name="price"
                placeholder="Precio"
                value={formData.price}
                onChange={handleChange}
            />

            <button type="submit">
                Crear
            </button>

        </form>
    );
}

export default ItemCreateForm;