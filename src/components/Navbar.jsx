import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-200 font-sans">
      <a href="/" className="text-2xl font-bold text-slate-900">
        DevLevel
      </a>
      <div className="flex gap-8 items-center">
        <a href="#" className="text-slate-700 font-medium hover:text-blue-600 transition">
          Home
        </a>
        <a href="#" className="text-slate-700 font-medium hover:text-blue-600 transition">
          Leaderboard
        </a>
        <a href="#" className="text-slate-700 font-medium hover:text-blue-600 transition">
          Challenges
        </a>
        <a href="#" className="text-slate-700 font-medium hover:text-blue-600 transition">
          Badges
        </a>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition"><a href="/login">
          Login
          </a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;