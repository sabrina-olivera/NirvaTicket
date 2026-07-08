import React from 'react'
import Home from './Home'
import {Routes, Link} from 'react-router-dom'

export const NotFound = () => {
  return (
    <main>
        <h1>Página no encontrada | Error 404</h1>
        <Link to="/"> Inicio </Link>

    </main>
  )
}

