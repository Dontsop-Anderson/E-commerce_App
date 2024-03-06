import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/display"}>
          <div className="ml-5">
          <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide animate-pulse">
            WELCOME TO MY SHOPPING CART
          </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <Link to={"/cart"}>
          <li className="cursor-pointer list-none"><button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              Cart
            </button></li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
