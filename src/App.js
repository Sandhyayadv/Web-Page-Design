import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Paragraph from "./Paragraph";
import FlexBox from "./FlexBox";
import Nopage from "./pages/Nopage";
import Briefcase from "./pages/Briefcase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<Paragraph />} />
          <Route path="flexbox" element={<FlexBox />} />
          <Route path="briefcase" element={<Briefcase />} />
        </Route>
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
