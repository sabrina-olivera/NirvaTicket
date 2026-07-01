import React from 'react'

const Card = ( props ) => {

  return (
    <div className='card p-2'>
        <h4>  { props.name }</h4>
        <h3>$ { props.price }</h3>
        <button type='button' className='btn btn-dark'> + </button>
    </div>
  )
}

export default Card