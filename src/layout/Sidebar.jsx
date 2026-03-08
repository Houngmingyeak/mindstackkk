// import { Link, useLocation } from "react-router-dom";
// import { FaRegQuestionCircle, FaRegUser } from "react-icons/fa";
// import { LuSwords } from "react-icons/lu";
// import { GoTrophy } from "react-icons/go";
// import { FiHome } from "react-icons/fi";
// import { FaRegBookmark } from "react-icons/fa6";

// const navItems = [
//   { label: "Home", path: "/", icon: <FiHome /> },
//   { label: "Questions", path: "/questions", icon: <FaRegQuestionCircle /> },
//   { label: "Leaderboard", path: "/leaderboard", icon: <GoTrophy /> },
//   { label: "Challenges", path: "/challenges", icon: <LuSwords /> },
//   { label: "Saves", path: "/saves", icon: <FaRegBookmark /> },
//   { label: "Profile", path: "/profile", icon: <FaRegUser /> },
// ];

// export default function Sidebar() {
//   const location = useLocation();
//   return (
//     <aside className="w-72 bg-white dark:bg-gray-950 border-r border-gray-100 dark:border-gray-800 flex flex-col py-4 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto transition-colors duration-300 shrink-0">
//       {/* Navigation Links */}
//       {/* <nav className="flex flex-col gap-0.5 px-4">
//         {navItems.map(({ label, path, icon }) => (
//           <Link
//             key={label}
//             to={path}
//             className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-md font-medium transition-colors ${
//               location.pathname === path
//                 ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
//                 : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200"
//             }`}
//           >
//             {icon}
//             {label}
//           </Link>
//         ))}
//       </nav> */}
//       <nav className="flex flex-col gap-1 w-64 h-screen bg-white px-3 py-6">
//         <Link
//           to="/"
//           className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition font-medium text-sm"
//         >
//           <FiHome className="text-[18px]" /> Home
//         </Link>

//         <Link
//           to="/questions"
//           className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition font-medium text-sm"
//         >
//           <FaRegQuestionCircle className="text-[18px]" /> Questions
//         </Link>

//         <Link
//           to="/leaderboard"
//           className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition font-medium text-sm"
//         >
//           <GoTrophy className="text-[18px]" /> Leaderboard
//         </Link>

//         <Link
//           to="/challenges"
//           className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition font-medium text-sm"
//         >
//           <LuSwords className="text-[18px]" /> Challenges
//         </Link>

//         <Link
//           to="/saves"
//           className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition font-medium text-sm"
//         >
//           <FaRegBookmark className="text-[18px]" /> Saves
//         </Link>

//         <Link
//           to="/profile"
//           className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition font-medium text-sm"
//         >
//           <FaRegUser className="text-[18px]" /> Profile
//         </Link>
//       </nav>

//       {/* XP Progress */}
//       {/* <div className="px-4 mt-2">
//         <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
//           Your Progress
//         </p>
//         <div className="flex items-center gap-2 mb-1.5">
//           <span className="w-7 h-7 rounded-full bg-linear-to-br from-blue-500 to-violet-500 flex items-center justify-center text-[10px] font-bold text-white">
//             12
//           </span>
//           <div>
//             <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-200">Level 12</p>
//             <p className="text-[10px] text-gray-400 dark:text-gray-500">720 / 1000 XP</p>
//           </div>
//         </div>
//         <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
//           <div
//             className="h-full rounded-full bg-linear-to-r from-blue-500 to-violet-500"
//             style={{ width: "52%" }}
//           />
//         </div>
//       </div> */}
//     </aside>
//   );
// }
import { Link, useLocation } from "react-router-dom";
import { FaRegQuestionCircle, FaRegUser } from "react-icons/fa";
import { LuSwords } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";

const navItems = [
  { label: "Home", path: "/", icon: <FiHome /> },
  { label: "Questions", path: "/questions", icon: <FaRegQuestionCircle /> },
  { label: "Leaderboard", path: "/leaderboard", icon: <GoTrophy /> },
  { label: "Challenges", path: "/challenges", icon: <LuSwords /> },
  { label: "Saves", path: "/saves", icon: <FaRegBookmark /> },
  { label: "Profile", path: "/profile", icon: <FaRegUser /> },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-72 bg-white dark:bg-gray-950 border-r border-gray-100 dark:border-gray-800 flex flex-col py-4 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto transition-colors duration-300 shrink-0">
      <nav className="flex flex-col gap-1 px-3 py-2">
        {navItems.map(({ label, path, icon }) => (
          <Link
            key={label}
            to={path}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
              location.pathname === path
                ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            <span className="text-[18px]">{icon}</span>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}