interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sheet = ({ isOpen, onClose }: SheetProps) => {
  if (!isOpen) return null;

  return (
    <aside className="fixed inset-0 flex justify-end z-50">
      <div onClick={onClose} className="absolute inset-0 bg-black/30"></div>
      <div className="relative w-[50%] h-full bg-white">
        <nav className="flex flex-col gap-4 p-4">
          <button className="self-end">
            <div onClick={onClose} className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black rounded transform -translate-y-1/2 rotate-45"></span>
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black rounded transform -translate-y-1/2 -rotate-45"></span>
            </div>
          </button>
          <a className="hover:text-blue-400 cursor-pointer">Home</a>
          <a className="hover:text-blue-400 cursor-pointer">Shop</a>
          <a className="hover:text-blue-400 cursor-pointer">About</a>
          <a className="hover:text-blue-400 cursor-pointer">Contact</a>
        </nav>
      </div>
    </aside>
  );
};

export default Sheet;
