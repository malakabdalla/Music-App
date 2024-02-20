import "./App.css";
import React from "react";
import IntroSection from "../Layouts/introSection/IntroSection";
import { MusicList } from "../Layouts";
import CommentForm from "../components/commentForm/form";

function App() {
  return (
    <React.StrictMode>
      <IntroSection />
      <MusicList />
      <CommentForm />
    </React.StrictMode>
  );
}
export default App;
