const BASE_URL = "http://localhost:8080/api/items";

export async function getItems() {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
        throw new Error("Error al obtener los productos");
    }

    return response.json();
}

export async function getItem(id) {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Producto no encontrado");
    }

    return response.json();
}

export async function createItem(item) {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    });

    if (!response.ok) {
        throw new Error("No se pudo crear el producto");
    }

    return response.json();
}

export async function updateItem(id, item) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    });

    if (!response.ok) {
        throw new Error("No se pudo actualizar");
    }

    return response.json();
}

export async function deleteItem(id) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("No se pudo eliminar");
    }
}