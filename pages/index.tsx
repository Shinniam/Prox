import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    const searchURL = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    window.location.href = searchURL;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src="/logo.png" alt="Prox Logo" className="w-52 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Prox</h1>
      <form onSubmit={handleSearch} className="w-full max-w-xl px-4">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-full py-3 px-5 shadow-lg text-lg focus:outline-none"
          placeholder="Search or enter URL..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="flex justify-center mt-4 space-x-3">
          <button
            type="submit"
            className="bg-gray-200 px-5 py-2 rounded shadow hover:bg-gray-300"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
