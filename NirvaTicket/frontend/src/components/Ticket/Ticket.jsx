import Detail from './Detail';


function Ticket({items}) {
  return (
    <>
      <h1>Ticket</h1>
      {
      items.map( 
        item => (
         <Detail //represento ProductCard
          key={item.id}
          item={item} 
         />
      ))}
    </>
  )
}

export default Ticket