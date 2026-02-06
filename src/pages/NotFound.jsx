import { useLocation, Link } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-2">Oops! Page not found.</p>
      <p className="mb-4 text-gray-600">No match for <code>{location.pathname}</code></p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
