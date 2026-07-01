import Detail from './Detail';

function Ticket() {
  return (
    <>
      <h1>Ticket</h1>
      <Detail name='remera' price={23}/>
      <Detail name='buzo' price={50}/>
    </>
  )
}

export default Ticket