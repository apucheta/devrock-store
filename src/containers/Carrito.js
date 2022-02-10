import React, { useContext } from 'react';
import '../assets/css/Carrito.css';
import ItemCarrito from '../components/ItemCarrito';
import Contexto from '../context/Contexto';
export default function Carrito() {
  const { carrito, eliminarDeCarrito } = useContext(Contexto);
  return (
    <>
      <div className='carrito'>
        <div className='carrito-listadito'>
          {carrito.map((item, i) => (
            <ItemCarrito
              {...item}
              key={i}
              eliminarDeCarrito={eliminarDeCarrito}
            ></ItemCarrito>
          ))}
        </div>

        <div className='carrito-precio'>
          Total a pagar <br />
          <strong>U$D 3400</strong>
        </div>
      </div>
    </>
  );
}
