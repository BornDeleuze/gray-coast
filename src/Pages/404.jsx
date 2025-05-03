const NotFound = () => {
  return (
    <div className="px-4 py-20 max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6 text-gray-900">404</h1>
      <p className="text-xl text-gray-700 mb-4">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Maybe you followed a broken link, or typed something wrong. It happens!
      </p>
      <a
        href="/"
        className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
