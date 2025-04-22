import MaxWidthContainer from "../layouts/max-width-container";
import { UserRound, Search, Heart, ShoppingCart } from "lucide-react";
import Sheet from "../ui/sheet";
import { useState } from "react";
import { useCartStore } from "../../store/cart-state";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { itemCount } = useCartStore();
  const [openSheet, setSheetOpen] = useState(false);

  const onOpen = () => setSheetOpen(true);
  const onClose = () => setSheetOpen(false);

  return (
    <MaxWidthContainer className="flex justify-between py-4 items-center">
      <div>
        <h1 className="font-bold text-3xl">Furniro</h1>
      </div>
      <div className="gap-8 md:flex hidden">
        <h1 className="hover:text-blue-400 cursor-pointer">Home</h1>
        <h1 className="hover:text-blue-400 cursor-pointer">Shop</h1>
        <h1 className="hover:text-blue-400 cursor-pointer">About</h1>
        <h1 className="hover:text-blue-400 cursor-pointer">Contact</h1>
      </div>
      <div className="flex gap-8 items-center">
        <Search className="md:block hidden" />
        <UserRound className="md:block hidden" />
        <Heart className="md:block hidden" />
        <div className="relative">
          <Link to="/cart">
            <ShoppingCart />
          </Link>
          {itemCount > 0 && (
            <span className="absolute flex items-center justify-center -top-4 -right-4 bg-red-500 h-6 w-6 rounded-full text-white">
              {itemCount}
            </span>
          )}
        </div>
        <div
          onClick={onOpen}
          className="md:hidden flex flex-col justify-between w-6 h-4 cursor-pointer"
        >
          <span className="h-0.5 w-full bg-black rounded"></span>
          <span className="h-0.5 w-full bg-black rounded"></span>
          <span className="h-0.5 w-full bg-black rounded"></span>
        </div>
      </div>

      <Sheet isOpen={openSheet} onClose={onClose} />
    </MaxWidthContainer>
  );
};

export default Navbar;
