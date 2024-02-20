import React from "react";
import { ArtistName, Intro, Type } from "../components";
import CommentForm from "../components/CommentForm/form";


function IntroSection() {
  return (
    <React.StrictMode>
      <ArtistName />
      <Intro />
      <Type />
      <CommentForm />
    </React.StrictMode>
  );
}

export default IntroSection;
