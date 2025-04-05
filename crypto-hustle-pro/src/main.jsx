import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout.jsx";
import DetailView from "./routes/DetailView.jsx";
import NotFound from "./routes/NotFound.jsx";

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} path="/" element={<App />} />
          <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<RoutesProvider />);
