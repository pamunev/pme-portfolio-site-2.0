import "./App.css";
import "./assets/styles/index.css";
import React from "react";
import Layout from "./layout/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
