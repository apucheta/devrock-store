import React from 'react';
import borrar from '../assets/statics/borrar.png';
import '../assets/css/ItemCarrito.css';

export default function ItemCarrito(props) {
  console.log(props);
  const { nombre, precio, img, id } = props[0];
  const eliminarCarrito = () => {
    props.eliminarDeCarrito(id);
  };
  return (
    <>
      <div className='carrito-item'>
        <img src={img} alt='' className='carrito-item-img' />
        <div className='carrito-txt'>
          <h1 className='carrito-item-titulo'>{nombre}</h1>
          <h3 className='carrito-item-precio'>AR$ {precio}</h3>
        </div>
        <img
          src={borrar}
          alt=''
          className='carrito-item-borrar'
          onClick={eliminarCarrito}
        />
      </div>
    </>
  );
}
