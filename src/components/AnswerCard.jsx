// import React from "react";
// import { MdOutlineContentCopy } from "react-icons/md";

// const questions = [
//   {
//     id: 1,
//     title:
//       "How to implement WebSocket reconnection with exponential backoff in TypeScript?",
//     excerpt:
//       "I'm building a real-time chat application and need a robust reconnection strategy. The current implementation fails silently.",
//     tags: ["typescript", "websocket", "real-time"],
//     author: { initials: "SM", name: "Sarah Miller", color: "bg-violet-500" },
//     comments: 7,
//     views: 1240,
//     time: "2h ago",
//   },
// ];

// export default function AnswerCard({ answer }) {
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
//       {/* Answer text */}
//       <p className="text-sm text-gray-700 mb-3">Here is the problem sloving</p>

//       {/* Code Block */}
//       <div className="rounded-xl overflow-hidden border border-gray-100">
//         {/* Code header */}
//         <div className="flex items-center justify-between bg-gray-50 border-b border-gray-100 px-4 py-2">
//           <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
//             asdfasd
//           </span>
//           <button
//             onClick={() => navigator.clipboard?.writeText(answer.code)}
//             className="flex items-center gap-1 text-xs text-gray-400 hover:text-blue-600 transition-colors"
//           >
//             <MdOutlineContentCopy />
//             Copy
//           </button>
//         </div>

//         {/* Code content */}
//         <pre className="bg-[#1e1e2e] text-[#cdd6f4] text-xs leading-relaxed p-4 overflow-x-auto font-mono">
//           <code>make sure</code>
//         </pre>
//       </div>

//       {/* Author + time */}
//       <div className="flex items-center justify-between mt-4">
//         <div className="flex items-center gap-2">
//           <div
//             className={`w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center ${questions[0].author.color}`}
//           >
//             {questions[0].author.initials}
//           </div>
//           <span className="text-sm font-medium text-gray-700">
//             {questions[0].author.name}
//           </span>
//         </div>
//         <span className="text-xs text-gray-400">{questions[0].time}</span>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";

const questions = [
  {
    id: 1,
    title: "How to implement WebSocket reconnection with exponential backoff in TypeScript?",
    excerpt: "I'm building a real-time chat application and need a robust reconnection strategy. The current implementation fails silently.",
    tags: ["typescript", "websocket", "real-time"],
    author: { initials: "SM", name: "Sarah Miller", color: "bg-violet-500" },
    comments: 7,
    views: 1240,
    time: "2h ago",
  },
];

export default function AnswerCard({ answer }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5 mb-4 transition-colors duration-300">

      {/* Answer text */}
      <p className="text-[15px] text-gray-700 dark:text-gray-300 mb-3">
        Here is the problem solving
      </p>

      {/* Code Block */}
      <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">

        {/* Code header */}
        <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 px-4 py-2">
          <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide">
            typescript
          </span>
          <button
            onClick={() => navigator.clipboard?.writeText(answer?.code)}
            className="flex items-center gap-1 text-[12px] text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <MdOutlineContentCopy size={13} />
            Copy
          </button>
        </div>

        {/* Code content */}
        <pre className="bg-[#1e1e2e] text-[#cdd6f4] text-[15px] leading-relaxed p-4 overflow-x-auto font-mono">
          <code>make sure</code>
        </pre>
      </div>

      {/* Author + time */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full text-white text-[12px] font-bold flex items-center justify-center ${questions[0].author.color}`}>
            {questions[0].author.initials}
          </div>
          <span className="text-[14px] font-medium text-gray-700 dark:text-gray-300">
            {questions[0].author.name}
          </span>
        </div>
        <span className="text-[13px] text-gray-400 dark:text-gray-500">
          {questions[0].time}
        </span>
      </div>
    </div>
  );
}