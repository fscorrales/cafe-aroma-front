import axios from "axios";

// Acción para cargar una orden
export const postOrder = async (cart, user) => {
  try {
    const newOrder = {
      user_id: user.id, // Reemplaza con el ID del usuario actual
      items: cart.map((item) => ({
        product_id: item._id,
        cantidad: Number(item.quantity),
        precio: Number(item.precio),
      })),
    };

    console.log(newOrder);

    const orderSaved = (
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/ordenes/crearPedido`,
        newOrder
      )
    ).data;
    return orderSaved;
    // dispatch(getUsuarios(usuario));
  } catch (error) {
    console.error("Error creating order:", error);
  }
};