import axios from 'axios';
import Contexto from './Contexto';
import { useReducer } from 'react';
import Reducer from './Reducer';

export default function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    productos: [],
    carrito: [],
  };
  const [state, dispatch] = useReducer(Reducer, estadoInicial);
  const obtenerProductos = async () => {
    const res = await axios.get(
      'https://devrockstore-default-rtdb.firebaseio.com/productos.json'
    );
    dispatch({ type: 'OBTENER_PRODUCTOS', payload: res.data });
    console.log('usar contexto', res.data);
  };
  const agregarACarrito = (item) => {
    console.log('llegue agrego a carrito', item);
    dispatch({ type: 'AGREGAR_A_CARRITO', payload: item });
  };

  const eliminarDeCarrito = (item) => {
    console.log('borrando item de carrito', item);
    dispatch({ type: 'ELIMINAR_DE_CARRITO', payload: item });
  };
  return (
    <Contexto.Provider
      value={{
        productos: state.productos,
        carrito: state.carrito,
        obtenerProductos,
        agregarACarrito,
        eliminarDeCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
