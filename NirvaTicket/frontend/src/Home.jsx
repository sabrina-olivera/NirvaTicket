import ProductList from './components/StockList/ProductList';
import Ticket from './components/Ticket/Ticket';
import { items } from './data/items'

function Main() {
  console.log(items);
  return (
    // <ProductList items = {items} />
    <Ticket items = {items} />
  )
}

export default Main