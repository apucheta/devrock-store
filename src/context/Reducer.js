// TYPES

const OBTENER_PRODUCTOS = 'OBTENER_PRODUCTOS';
const AGREGAR_A_CARRITO = 'AGREGAR_A_CARRITO';
const ELIMINAR_DE_CARRITO = 'ELIMINAR_DE_CARRITO';

export default function Reducer(state, action) {
  const { payload, type } = action;
  // eslint-disable-next-line default-case
  switch (type) {
    case OBTENER_PRODUCTOS:
      return { ...state, productos: payload };
    case AGREGAR_A_CARRITO:
      return {
        ...state,
        carrito: [
          ...state.carrito,
          state.productos.filter((item) => item.id === parseInt(payload)),
        ],
      };
    case ELIMINAR_DE_CARRITO:
      console.log(
        payload,
        '<- payload, state ->',
        state.carrito,
        'lo que llega'
      );
      return {
        ...state,
        carrito: state.carrito.filter((items) => items[0].id !== payload),
      };
  }
}
