import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "../Pages/AboutPage";
import { Dashboard } from "../Pages/Dashboard";
import { MainPage } from "../Pages/MainPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
