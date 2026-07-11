import {Link} from 'react-router-dom'

import ItemList from '../Item/ItemList';
import Ticket from '../Ticket/Ticket';
import TicketDetailCard from '../TicketHistory/TicketDetailCard';

function Main() {
  // NAVEGACION
  return (
  <>
      <Link to="/Ticket"> Facturación </Link>
      <Link to="/ItemList"> Inventario </Link>
      <Link to="/TicketDetail"> Historial de tickets </Link>
  </>
    



  )
}

export default Main