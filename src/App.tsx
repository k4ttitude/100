import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DayOne from "./routes/1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DayOne />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
