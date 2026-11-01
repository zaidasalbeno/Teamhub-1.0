import { Route, Routes } from "react-router";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Employee from "./pages/Employee.jsx";
import Employer from "./pages/Employer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Work from "./pages/Work.jsx";
export default function App() {
  return (
    <>
      <div className="app-shell">
        <Header />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/employer" element={<Employer />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>

  )

}