// App.jsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChallengesPage from "./pages/ChallengesPage";
import QuestionsPage from "./pages/QuestionPage";
import BookmarkCard from "./pages/BookMarkCard";
import QuestionDetailPage from "./pages/QuestionDetail";
import AskQuestion from "./pages/AskQuestion";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import { useTheme } from "./main.jsx";
import AboutPage from "./pages/AboutUsPage.jsx";
import Leaderboard from "./pages/LeaderBoard.jsx";
import Account from "./pages/Account.jsx";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const { theme } = useTheme(); // get current theme

  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        {/* ── Standalone pages (no Header / Footer) ── */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ── App pages (with Layout: Header + Footer) ── */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/saves" element={<BookmarkCard />} />
          <Route path="/question/:id" element={<QuestionDetailPage />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/profile" element={<Account />} />
        </Route>
      </Routes>

      {/* Toast notifications respect current theme */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === "dark" ? "dark" : "light"}
      />
    </BrowserRouter>
  );
}
