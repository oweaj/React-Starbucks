import { useState } from "react";
import "./App.css";
import { Header, MainTitle, Rewards, Start, UseStar, Benefit, Footer } from "@/components";

function App() {
  return (
    <>
      <Header />
      <MainTitle />
      <Rewards />
      <Start />
      <UseStar />
      <Benefit />
      <Footer />
    </>
  );
}

export default App;
