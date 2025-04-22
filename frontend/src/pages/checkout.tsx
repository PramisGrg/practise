import { Input } from "../components/ui/input";
import { useCartStore } from "../store/cart-state";

const Checkout = () => {
  const { totalPrice } = useCartStore();
  return (
    <div>
      <h1>This is checktout</h1>
      <p>{totalPrice}</p>

      <div>
        <form>
          <Input placeholder="Enter your name" />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
