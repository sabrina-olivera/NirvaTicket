import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Header from './components/Header';

import Home from './components/Pages/Home';
import Login from './components/Auth/Login'

import ItemList from './components/Item/ItemList'

//cobrar
import Ticket from './components/Ticket/Ticket'
import Detail from './components/Ticket/Detail';

//historial tickets
import TicketDetail from './components/TicketHistory/TicketDetail';
import TicketDetailCard from './components/TicketHistory/TicketDetailCard';
import { NotFound } from './components/Pages/NotFound';

// importar datos para que, al hacer click en el link, aparezcan
import { items } from './data/items' 
import { tickets } from './data/tickets'
import { ticketDetails } from './data/ticketDetails' 
// nombres dentro de {}: existen como variables en App.jsx y contienen el array



function App() {
  return (
    <>
      <Header />
    
      <Link to="/"> Inicio </Link>
      <Link to="/login"> Iniciar Sesión </Link>

      <Routes>
        <Route path='/*' element = { <NotFound /> } />
        <Route path='/' element = { <Home /> } />
        <Route path='/login' element = { <Login /> } />

       {/* cobrar */}
        <Route path='/Ticket' element = { <Ticket items={items} /> } />
        <Route path='/Detail' element = { <Detail/>} />

       {/* inventario */}
        <Route path='/itemList' element = { <ItemList items={items} /> } />
        {/* izquieda nombre de la prop, derechala variable - en el componente la recibo con nombre de izquierda */}

       {/* historial de tickets */}
        <Route path='/TicketDetail' element = { <TicketDetail tickets={tickets}/>} />
        <Route path='/TicketDetailCard/:id' element = { <TicketDetailCard ticketDetails={ticketDetails}/>} />
      </Routes>

    </>
  )
}

export default App
