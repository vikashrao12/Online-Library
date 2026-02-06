import { useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";
import studentBooks from "../data/booksData.js";

export default function Books() {
  // Get category from URL 
  const { category } = useParams();

  // State for search bar
  const [search, setSearch] = useState("");

  // Filter books by category first
  let filteredBooks = category
    ? studentBooks.filter((student) => student.category.toLowerCase() === category.toLowerCase())
    : studentBooks;

  if (search.trim() !== "") {
    filteredBooks = filteredBooks.filter(
      (student) =>
        student.title.toLowerCase().includes(search.toLowerCase()) ||
        student.author.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        {category ? `${category} Books` : "All Books"}
      </h1>


      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full md:w-1/2 mb-6"
      />


      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map((student) => (
            <BookCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No books found.</p>
      )}
    </div>
  );
}
