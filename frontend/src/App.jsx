import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailpage from "./pages/NoteDetailpage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="business">
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={() => toast.error("congrats")}>click me</button>
      <Routes>
        <Route path="/" element={HomePage}></Route>
        <Route path="/create" element={CreatePage}></Route>
        <Route path="/note/:id" element={NoteDetailpage}></Route>
      </Routes>
    </div>
  );
};

export default App;
