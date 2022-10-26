import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "../Pages/AboutPage";
import { Dashboard } from "../Pages/Dashboard";
import { ExpPage } from "../Pages/ExpPage";
import { MainPage } from "../Pages/MainPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experiencia" element={<ExpPage />} />
        {/* <Route path="/projects" element={<ExpPage />} />
        <Route path="/contact" element={<ExpPage />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
