import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
  subTotal: number;
}

interface CartState {
  cartItems: CartItem[];
  itemCount: number; // Number of unique products in the cart
  totalQuantity: number; // Total quantity of all items
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      itemCount: 0,
      totalQuantity: 0,
      totalPrice: 0,

      addToCart: (product: Product) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            const updatedItems = state.cartItems.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    subTotal: (item.quantity + 1) * product.price,
                  }
                : item
            );

            const newTotalPrice = updatedItems.reduce(
              (total, item) => total + item.subTotal,
              0
            );

            const newTotalQuantity = updatedItems.reduce(
              (total, item) => total + item.quantity,
              0
            );

            return {
              cartItems: updatedItems,
              itemCount: state.itemCount,
              totalQuantity: newTotalQuantity,
              totalPrice: newTotalPrice,
            };
          } else {
            const newItem: CartItem = {
              ...product,
              quantity: 1,
              subTotal: product.price,
            };

            const updatedItems = [...state.cartItems, newItem];

            const newTotalPrice = updatedItems.reduce(
              (total, item) => total + item.subTotal,
              0
            );

            const newTotalQuantity = updatedItems.reduce(
              (total, item) => total + item.quantity,
              0
            );

            return {
              cartItems: updatedItems,
              itemCount: state.itemCount + 1,
              totalQuantity: newTotalQuantity,
              totalPrice: newTotalPrice,
            };
          }
        }),

      removeFromCart: (product: Product) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.id === product.id
          );

          if (!existingItem) {
            return state;
          }

          let updatedItems;
          let uniqueProductRemoved = false;

          if (existingItem.quantity > 1) {
            // Decrease quantity
            updatedItems = state.cartItems.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    subTotal: (item.quantity - 1) * product.price,
                  }
                : item
            );
          } else {
            updatedItems = state.cartItems.filter(
              (item) => item.id !== product.id
            );
            uniqueProductRemoved = true;
          }

          const newTotalPrice = updatedItems.reduce(
            (total, item) => total + item.subTotal,
            0
          );

          const newTotalQuantity = updatedItems.reduce(
            (total, item) => total + item.quantity,
            0
          );

          return {
            cartItems: updatedItems,
            itemCount: uniqueProductRemoved
              ? state.itemCount - 1
              : state.itemCount,
            totalQuantity: newTotalQuantity,
            totalPrice: newTotalPrice,
          };
        }),

      clearCart: () => ({
        cartItems: [],
        itemCount: 0,
        totalQuantity: 0,
        totalPrice: 0,
      }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
