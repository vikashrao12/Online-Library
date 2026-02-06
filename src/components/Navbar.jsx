import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">Online Library</h1>
      <div className="space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline font-semibold" : "hover:underline"}>
          Home
        </NavLink>
        <NavLink to="/books" className={({ isActive }) => isActive ? "underline font-semibold" : "hover:underline"}>
          Books
        </NavLink>
        <NavLink to="/add-book" className={({ isActive }) => isActive ? "underline font-semibold" : "hover:underline"}>
          Add Book
        </NavLink>
      </div>
    </nav>

  );
}
