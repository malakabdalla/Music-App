//import "./App.css";
import React from "react";
import IntroSection from "./Layouts/introSection/IntroSection";
import { MusicList } from "./Layouts";

function App() {
  return (
    <React.StrictMode>
      <IntroSection />
      <MusicList />
    </React.StrictMode>
  );
}
export default App;
