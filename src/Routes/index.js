import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { MainPage } from "../Pages/MainPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
