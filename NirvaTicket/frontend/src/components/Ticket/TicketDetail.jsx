import React from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
// import TicketDetailCard from './TicketDetailCard'



const TicketDetail = ({tickets}) => { //ESTE COMPONETNE APARECERÁ POR CADA TICKET

  const navigate = useNavigate();

  return (
        <>
          <div>Historial de facturación</div>
          {tickets.map (ticket => (
              <>
                <div key={ticket.id}>
                    <p>{ticket.cliente}</p> 
                    <p>{ticket.fecha}</p>

                    <button onClick={() => navigate(`/TicketDetailCard/${ticket.id}`)}>
                    Ver detalle
                    </button>

                </div>
              </>
              )

            )
          }
        </>
  )
}

export default TicketDetail
