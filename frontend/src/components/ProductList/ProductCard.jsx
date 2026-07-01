
const ProductCard = ( { name, price }  ) =>  {
  return (
    <div>
        <h1>Artículo</h1>
        <div className='card p-2'>
        <h4>  { name }</h4>
        <h5>$ { price }</h5>
{/*         
        <p> Cantidad 
            <span> { cantidad} </span>
        </p>
        
        <button onClick={ add} type='button' className='btn btn-dark'> + </button> */}
        
    </div>
    </div>
  )
}

export default ProductCard