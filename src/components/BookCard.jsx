import { Link } from "react-router-dom";


export default function BookCard({ student }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition bg-white flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-1">{student.title}</h2>
        <p className="text-gray-600 mb-1">{student.author}</p>
        <p className="text-gray-500 text-sm">{student.category}</p>
        <p className="mt-2 text-gray-700">{student.description.substring(0, 60)}...</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-bold">Rating: {student.rating} ⭐</span>
        <Link
          to={`/book/${student.id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>

  );
}
