import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProfilePage from "./pages/profilepage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
