// import React from "react";

// export default function AnswerForm() {
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 w-full">
//       <h2 className="text-sm font-bold text-gray-800 mb-3">Your Answer</h2>
//       <div>
//         <textarea
//           className="w-full min-h-[120px] text-sm text-gray-700 placeholder-gray-300 bg-gray-50 rounded-xl border border-gray-100 p-3 focus:outline-none focus:ring-2 focus:ring-blue-100 resize-none"
//           placeholder="Write down your answer here ..."
//         />
//       </div>

//       <div className="flex items-center justify-between mt-3">
//         <div className="text-blue-400">+25 XP for answer</div>

//         <button className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors">
//           Post Answer
//         </button>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function AnswerForm() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5 w-full transition-colors duration-300">
      
      <h2 className="text-[15px] font-bold text-gray-800 dark:text-white mb-3">
        Your Answer
      </h2>

      <textarea
        className="w-full min-h-[120px] text-[14px] text-gray-700 dark:text-gray-300 placeholder-gray-300 dark:placeholder-gray-600 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 resize-none transition-colors"
        placeholder="Write down your answer here ..."
      />

      <div className="flex items-center justify-between mt-3">
        <span className="text-[14px] text-blue-400 dark:text-blue-400 font-medium">
          +25 XP for answer
        </span>
        <button className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-5 py-2 rounded-xl transition-colors">
          Post Answer
        </button>
      </div>
    </div>
  );
}