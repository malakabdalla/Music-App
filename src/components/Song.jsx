import { useState } from "react";
import MusicList from "./MusicList";

function Song() {
  const [likedTracks, setLikedTracks] = useState([]);

  const handleLikeToggle = (trackId) => {
    if (likedTracks.includes(trackId)) {
      setLikedTracks(likedTracks.filter((id) => id !== trackId));
    } else {
      setLikedTracks([...likedTracks, trackId]);
    }
  };

  return (
    <div>
      <MusicList likedTracks={likedTracks} onLikeToggle={handleLikeToggle} />
    </div>
  );
}

export default Song;
