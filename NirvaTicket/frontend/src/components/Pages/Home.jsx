import {Link} from 'react-router-dom'

import ProductList from '../StockList/ProductList';
import Ticket from '../Ticket/Ticket';
import TicketDetailCard from '../Ticket/TicketDetailCard';

function Main() {
  // NAVEGACION
  return (
  <>
      <Link to="/ticket"> Facturación </Link>
      <Link to="/productList"> Inventario </Link>
      <Link to="/TicketDetail"> Historial de tickets </Link>
  </>
    



  )
}

export default Main