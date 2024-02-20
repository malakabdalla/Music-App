import React from "react";
import { ArtistName, Intro, Type } from "../../components";

function IntroSection() {
  return (
    <React.StrictMode>
      <ArtistName />
      <Intro />
      <Type />
    </React.StrictMode>
  );
}

export default IntroSection;
