import { productData } from "../../data/product-data";
import { useCartStore } from "../../store/cart-state";
import MaxWidthContainer from "../layouts/max-width-container";

const CardItems = () => {
  const { addToCart } = useCartStore();

  return (
    <MaxWidthContainer className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
      {productData.map((product) => (
        <div key={product.id} className="relative group bg-gray-200">
          {/*Overlay*/}
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 w-full h-full bg-black/40 transition-opacity duration-300"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => addToCart(product)}
              className="text-white opacity-0 cursor-pointer group-hover:opacity-100 bg-red-700 p-2 transition-all duration-300 translate-y-8 group-hover:translate-y-0"
            >
              Add to Cart
            </button>
          </div>

          <div>
            {(product.discount || product.tag) && (
              <span
                className={`absolute top-4 right-4 text-white px-2 py-1 rounded ${
                  product.discount ? "bg-green-700" : "bg-red-700"
                }`}
              >
                {product.discount || product.tag}
              </span>
            )}
          </div>

          <img
            className="w-full h-80 object-cover"
            src={product.image}
            alt={product.name}
          />
          <div className="p-4">
            <h1>{product.name}</h1>
            <p className="text-neutral-400">{product.description}</p>
            <div className="flex justify-between">
              <span>{product.price}</span>
              <span className="line-through text-neutral-400">
                {product.oldPrice}
              </span>
            </div>
          </div>
        </div>
      ))}
    </MaxWidthContainer>
  );
};

export default CardItems;
