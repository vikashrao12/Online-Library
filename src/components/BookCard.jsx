import { Link } from "react-router-dom";


export default function BookCard({ student }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{student.title}</h2>
      <p className="text-gray-600">{student.author}</p>
      <p className="text-gray-500 text-sm">{student.category}</p>
      <p className="mt-2 text-gray-700">{student.description.substring(0, 60)}...</p>
      <p className="mt-1 font-bold">Rating: {student.rating} ⭐</p>
      <Link
        to={`/book/${student.id}`}
        className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
}
