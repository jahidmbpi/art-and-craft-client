import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" h-16 bg-green-600 items-center flex rounded-t-lg">
      <nav className="flex  text-center w-full justify-between p-2 items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-14 rounded-md"
            src="/Screenshot 2024-10-30 035131.png"
            alt="image"
          />
          <h2 className="font-medium text-lg font-serif">Crafted Roots</h2>
        </div>
        <div className="flex space-x-6 font-medium text-lg font-serif">
          <NavLink to="/">home</NavLink>
          <NavLink to="/allcraftanditem">All arts & craft item</NavLink>
          <NavLink to="/addcraft">Add craft item</NavLink>
          <NavLink to="/my-add-craft">My atr & craft list</NavLink>
        </div>
        <div>
          <NavLink>login</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
