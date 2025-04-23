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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* ロゴ部分 */}
      <img src="/logo.png" alt="Prox Logo" className="w-40 mb-8" />
      
      {/* サイト名 */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">Prox</h1>

      {/* 検索フォーム */}
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
            className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
      </form>

      {/* オプションボタン */}
      <div className="mt-8 text-center">
        <button className="text-blue-600 font-medium mr-6 hover:underline">
          About Prox
        </button>
        <button className="text-blue-600 font-medium mr-6 hover:underline">
          Privacy
        </button>
        <button className="text-blue-600 font-medium hover:underline">
          Terms of Use
        </button>
      </div>

      {/* よく使うサイトリンク */}
      <div className="mt-10 text-center">
        <p className="text-gray-500">Quick Access:</p>
        <div className="mt-2">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline mr-4"
          >
            YouTube
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline mr-4"
          >
            Twitter
          </a>
          <a
            href="https://tracker.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            Tracker.gg
          </a>
        </div>
      </div>
    </div>
  );
}
