export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-2">Page not found</h1>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist.
      </p>
      <a href="/" className="text-indigo-600 hover:underline">
        ← Back to home
      </a>
    </main>
  );
}
