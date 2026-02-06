import { Link } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";
import studentBooks from "../data/booksData.js";

export default function Home() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to the Online Library</h1>

      <div className="mb-8 flex gap-4 flex-wrap justify-center">
        <Link to="/books/fiction" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">
          Fiction
        </Link>
        <Link to="/books/non-fiction" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">
          Non-Fiction
        </Link>
        <Link to="/books/sci-fi" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">
          Sci-Fi
        </Link>
        <Link to="/books/history" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">
          History
        </Link>
      </div>


      <h2 className="text-3xl font-semibold mb-6 text-center">Popular Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentBooks.map((student) => (
          <BookCard key={student.id} student={student} />
        ))}
      </div>
    </div>

  );
}
