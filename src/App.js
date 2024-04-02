import "./App.css";
import "./assets/styles/index.css";
import React from "react";
import Layout from "./layout/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

console.log("hello");

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
