import { useCartStore } from "../store/cart-state";

const Cart = () => {
  const { cartItems, itemCount, totalPrice, addToCart, removeFromCart } =
    useCartStore();

  console.log(cartItems, "This is cart items");

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-2xl">Cart Items</h1>
      {cartItems.map((item) => (
        <div
          className="flex justify-between w-[80vw] items-center"
          key={item.id}
        >
          <img
            className="w-32 h-32 rounded-md object-cover"
            src={item.image}
            alt={`Image${item.id}`}
          />
          <h1>{item.price}</h1>
          <div className="flex gap-2">
            <button onClick={() => removeFromCart(item)}>-</button>
            <p>{item.quantity}</p>
            <button onClick={() => addToCart(item)}>+</button>
          </div>
          <p>Rs {item.subTotal}</p>
        </div>
      ))}

      <h1>Total: {totalPrice}</h1>
      <p>ItemCount : {itemCount}</p>
    </div>
  );
};

export default Cart;
