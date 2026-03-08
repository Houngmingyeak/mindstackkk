// import heroImage from "../assets/Herosection.png";
// import { FaArrowRight } from "react-icons/fa6";
// import { LuMessageSquare, LuGift, LuUsers } from "react-icons/lu";
// import { CiTrophy } from "react-icons/ci";
// import { CgMediaLive } from "react-icons/cg";
// import { RiShieldLine } from "react-icons/ri";
// import { IoCodeSlash } from "react-icons/io5";
// import { GoStarFill } from "react-icons/go";
// // import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <main className="bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white transition-colors duration-300">
//       {/* HERO */}
//       <section className="relative text-center py-24 px-6 overflow-hidden">
//         <img
//           src={heroImage}
//           alt="Developers collaborating"
//           className="absolute inset-0 w-full h-full object-cover opacity-5"
//         />
//         <div className="relative max-w-5xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//             Where developers
//             <span className="block bg-gradient-to-r from-blue-500 to-amber-400 bg-clip-text text-transparent">
//               level up together
//             </span>
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
//             The gamified Q&A platform that makes sharing knowledge rewarding.
//             Ask questions, earn XP, unlock badges, and climb the leaderboard.
//           </p>
//           <div className="flex gap-4 flex-wrap justify-center mt-10">
//             <Link
//               to="/questions"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold flex items-center gap-2 transition shadow-lg"
//             >
//               Start for free <FaArrowRight />
//             </Link>
//             <button className="border border-slate-300 dark:border-gray-700 px-8 py-3 rounded-2xl font-semibold hover:bg-slate-100 dark:hover:bg-gray-800 transition">
//               See how it works
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
//             {[
//               ["50K+", "Developers"],
//               ["120K+", "Questions Answered"],
//               ["2M+", "XP Earned"],
//               ["98%", "Satisfaction"],
//             ].map(([number, label]) => (
//               <div key={label}>
//                 <div className="text-3xl font-bold">{number}</div>
//                 <div className="text-sm text-slate-500 dark:text-gray-400">
//                   {label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FEATURES — id added here */}
//       <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-4">
//           Everything you need to grow
//         </h2>
//         <p className="text-center text-slate-600 dark:text-gray-400 mb-16 max-w-xl mx-auto">
//           A developer community built with gamification at its core.
//         </p>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { icon: <LuMessageSquare />, title: "Q&A That Rewards" },
//             { icon: <CiTrophy />, title: "Leaderboards" },
//             { icon: <CgMediaLive />, title: "Daily Challenges" },
//             { icon: <RiShieldLine />, title: "Level Up System" },
//             { icon: <LuGift />, title: "Badges & Rewards" },
//             { icon: <IoCodeSlash />, title: "Code-First UX" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-8 rounded-2xl hover:shadow-xl transition"
//             >
//               <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-gray-800 rounded-xl mb-4 text-blue-600 text-xl">
//                 {item.icon}
//               </div>
//               <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
//               <p className="text-slate-600 dark:text-gray-400 text-sm">
//                 Build reputation, earn XP, and grow within a thriving developer
//                 ecosystem.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="py-24 px-6 bg-slate-100 dark:bg-gray-900 transition">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-4">How it works</h2>
//           <p className="text-slate-600 dark:text-gray-400 mb-16">
//             Three simple steps to start leveling up.
//           </p>
//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               ["01", "Ask or Answer"],
//               ["02", "Earn XP & Badges"],
//               ["03", "Climb the Ranks"],
//             ].map(([step, title]) => (
//               <div key={step}>
//                 <div className="text-blue-600 text-4xl font-bold mb-4">
//                   {step}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{title}</h3>
//                 <p className="text-slate-600 dark:text-gray-400">
//                   Contribute knowledge and get rewarded instantly.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS — id added here */}
//       <section id="testimonials" className="py-4 px-6 max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           What devs are saying
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             ["Sarah M.", "Senior Engineer @ Stripe"],
//             ["James L.", "Full-Stack Dev"],
//             ["Erwin W.", "Tech Lead @ Netflix"],
//           ].map(([name, role]) => (
//             <div
//               key={name}
//               className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-8 rounded-2xl"
//             >
//               <div className="flex text-yellow-400 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <GoStarFill key={i} />
//                 ))}
//               </div>
//               <p className="text-slate-600 dark:text-gray-400 mb-6">
//                 "This platform actually makes learning and sharing fun."
//               </p>
//               <div className="border-t dark:border-gray-700 pt-4">
//                 <p className="font-semibold">{name}</p>
//                 <p className="text-sm text-slate-500 dark:text-gray-400">
//                   {role}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-4 px-6">
//         <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl text-center p-12 shadow-lg">
//           <h2 className="text-4xl font-bold mb-4">Ready to level up?</h2>
//           <p className="text-slate-600 dark:text-gray-400 mb-8">
//             Join thousands of developers earning XP and unlocking achievements.
//           </p>
//           <Link
//             to="/signup"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-2xl font-semibold inline-block transition shadow-md"
//           >
//             Get Started
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default HomePage;
import heroImage from "../assets/Herosection.png";
import { FaArrowRight } from "react-icons/fa6";
import { LuMessageSquare, LuGift, LuUsers } from "react-icons/lu";
import { CiTrophy } from "react-icons/ci";
import { CgMediaLive } from "react-icons/cg";
import { RiShieldLine } from "react-icons/ri";
import { IoCodeSlash } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* HERO */}
      <section className="relative text-center py-24 px-6 overflow-hidden">
        <img
          src={heroImage}
          alt="Developers collaborating"
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        />
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Where developers
            <span className="block bg-gradient-to-r from-blue-500 to-amber-400 bg-clip-text text-transparent">
              level up together
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            The gamified Q&A platform that makes sharing knowledge rewarding.
            Ask questions, earn XP, unlock badges, and climb the leaderboard.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-10">
            <Link
              to="/questions"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold flex items-center gap-2 transition shadow-lg"
            >
              Start for free <FaArrowRight />
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-slate-300 dark:border-gray-700 px-8 py-3 rounded-2xl font-semibold hover:bg-slate-100 dark:hover:bg-gray-800 transition"
            >
              See how it works
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              ["50K+", "Developers"],
              ["120K+", "Questions Answered"],
              ["2M+", "XP Earned"],
              ["98%", "Satisfaction"],
            ].map(([number, label]) => (
              <div key={label}>
                <div className="text-3xl font-bold">{number}</div>
                <div className="text-sm text-slate-500 dark:text-gray-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Everything you need to grow
        </h2>
        <p className="text-center text-slate-600 dark:text-gray-400 mb-16 max-w-xl mx-auto">
          A developer community built with gamification at its core.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <LuMessageSquare />, title: "Q&A That Rewards" },
            { icon: <CiTrophy />, title: "Leaderboards" },
            { icon: <CgMediaLive />, title: "Daily Challenges" },
            { icon: <RiShieldLine />, title: "Level Up System" },
            { icon: <LuGift />, title: "Badges & Rewards" },
            { icon: <IoCodeSlash />, title: "Code-First UX" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-8 rounded-2xl hover:shadow-xl transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-gray-800 rounded-xl mb-4 text-blue-600 text-xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm">
                Build reputation, earn XP, and grow within a thriving developer
                ecosystem.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-gray-900 transition">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">How it works</h2>
          <p className="text-slate-600 dark:text-gray-400 mb-16">
            Three simple steps to start leveling up.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["01", "Ask or Answer"],
              ["02", "Earn XP & Badges"],
              ["03", "Climb the Ranks"],
            ].map(([step, title]) => (
              <div key={step}>
                <div className="text-blue-600 text-4xl font-bold mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-600 dark:text-gray-400">
                  Contribute knowledge and get rewarded instantly.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-4 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          What devs are saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Sarah M.", "Senior Engineer @ Stripe"],
            ["James L.", "Full-Stack Dev"],
            ["Erwin W.", "Tech Lead @ Netflix"],
          ].map(([name, role]) => (
            <div
              key={name}
              className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-8 rounded-2xl"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <GoStarFill key={i} />
                ))}
              </div>
              <p className="text-slate-600 dark:text-gray-400 mb-6">
                "This platform actually makes learning and sharing fun."
              </p>
              <div className="border-t dark:border-gray-700 pt-4">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-slate-500 dark:text-gray-400">
                  {role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-4 px-6">
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl text-center p-12 shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Ready to level up?</h2>
          <p className="text-slate-600 dark:text-gray-400 mb-8">
            Join thousands of developers earning XP and unlocking achievements.
          </p>
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-2xl font-semibold inline-block transition shadow-md"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;