import { useState } from "react";
import "./App.css";
import { Header, MainTitle, Rewards, Start, UseStar, Benefit } from "@/components";

function App() {
  return (
    <>
      <Header />
      <MainTitle />
      <Rewards />
      <Start />
      <UseStar />
      <Benefit />
    </>
  );
}

export default App;
