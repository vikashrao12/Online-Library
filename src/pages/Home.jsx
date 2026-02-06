import BookCard from "../components/BookCard.jsx";
import studentBooks from "../data/booksData.js";

export default function Home() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-4">Welcome to the Online Library</h1>


      <div className="mb-6 flex gap-4 flex-wrap">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Fiction</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Non-Fiction</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sci-Fi</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">History</button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {studentBooks.map((student) => (
          <BookCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
