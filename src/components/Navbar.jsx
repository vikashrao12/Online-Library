import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Online Library</h1>
      <div className="space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline" : "hover:underline"}>Home</NavLink>
        <NavLink to="/books" className={({ isActive }) => isActive ? "underline" : "hover:underline"}>Books</NavLink>
        <NavLink to="/add-book" className={({ isActive }) => isActive ? "underline" : "hover:underline"}>Add Book</NavLink>
      </div>
    </nav>
  );
}
