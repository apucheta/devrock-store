import React, { useContext, useEffect } from 'react';
import Contexto from '../context/Contexto';
import '../assets/css/Home.css';
import Item from '../components/Item';
export default function Home() {
  useEffect(() => {
    obtenerProductos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { obtenerProductos, productos } = useContext(Contexto);
  return (
    <>
      <div className='container'>
        <div className='wraper'>
          <div className='home'>
            {productos.map((item) => (
              <Item {...item} key={item.id}></Item>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
