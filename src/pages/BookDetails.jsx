import { useParams, useNavigate } from "react-router-dom";
import studentBooks from "../data/booksData.js";

export default function BookDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const student = studentBooks.find((b) => b.id === parseInt(id));


  if (!student) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-red-600">Book not found</h1>
        <button
          onClick={() => navigate("/books")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow-md m-10">
      <h1 className="text-3xl font-bold mb-2">{student.title}</h1>
      <p className="text-gray-600 mb-2">Author: {student.author}</p>
      <p className="text-gray-500 mb-4">Category: {student.category}</p>
      <p className="text-gray-700 mb-4">{student.description}</p>
      <p className="font-bold mb-4">Rating: {student.rating} ⭐</p>


      <button
        onClick={() => navigate("/books")}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Browse
      </button>
    </div>
  );
}
