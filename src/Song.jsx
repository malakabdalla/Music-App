//  import React from "react";
// import {useState} from "react";
// import { FaHeart, FaRegHeart } from 'react-icons/fa';

// const tracks = [
//     { id: 1, name: 'When it all falls down', releaseDate: '2004-03-08', cover: 'song1.jpg' },
//     { id: 2, name: 'touch the sky', releaseDate: '2005-08-30', cover: 'song2.jpg' }, 
//   ];
// export default function MusicList({ onLikeToggle, likedTracks }) {
//     return (
//       <div>
//         <h2>Music List</h2>
//         {tracks.map((track) => (
//           <div key={track.id}>
//             <img src={track.cover} alt={track.name} />
//             <p>{track.name}</p>
//             <p>{track.releaseDate}</p>
//             <button onClick={() => onLikeToggle(track.id)}>
//               {likedTracks.includes(track.id) ? <FaHeart /> : <FaRegHeart />}
//             </button>
//           </div>
//         ))}
//       </div>
//     )
//   }
// ParentComponent.jsx
import { useState } from 'react';
import MusicList from './MusicList';

function Song() {

  const [likedTracks, setLikedTracks] = useState([]);

 
  const handleLikeToggle = (trackId) => {
    if (likedTracks.includes(trackId)) {
      setLikedTracks(likedTracks.filter(id => id !== trackId));
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
