import React from 'react'
import {useParams} from 'react-router-dom' //llegamos al componente que tendra las rutas dinámicas

const TicketDetailCard = ({ticketDetails}) => { //ESTE COMPONETNE MOSTRARÁ EL DETALLE SEGÚN EL ID DEL TICKET

  const {id} = useParams(); //toma el id que viaja desde el boton del map del TicketDetail
  const detalles = ticketDetails.filter(d => d.ticket_id === Number(id)); //traemos un array de ticketDetails cuyo ticket_id coincida
  console.log(detalles);
  const url = `/TicketDetail/${id}`

  return (
    <>
      {detalles.map(detalle => ( //recorremos el array con map
        <div key={detalle.id}>
          <p>{detalle.producto}</p>
          <p>Cantidad: {detalle.cantidad}</p>
          <p>Precio: {detalle.precio_unitario}</p>
        </div>
      ))}
    </>
  )
}

export default TicketDetailCard
