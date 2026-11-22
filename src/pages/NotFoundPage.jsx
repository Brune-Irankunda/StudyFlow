
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

function NotFoundPage() {
  useDocumentTitle("Page Not Found");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold text-teal-600">404</h1>

      <h2 className="mt-4 text-2xl font-bold text-gray-900">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-teal-600 px-6 py-3 font-medium text-white hover:bg-teal-700"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFoundPage;
