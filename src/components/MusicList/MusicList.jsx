// import React from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import Tracks from "../Tracks/Tracks";

export default function MusicList({ onLikeToggle, likedTracks }) {
  return (
    <div>
      <h2>PH1 Music List</h2>
      {Tracks.map((Tracks) => (
        <div key={Tracks.id}>
          <img src={Tracks.cover} alt={Tracks.name} />
          <p>
            {Tracks.name} - {Tracks.artist}
          </p>
          <p>Release Date: {Tracks.releaseDate}</p>
          <button onClick={() => onLikeToggle(Tracks.id)}>
            {likedTracks.includes(Tracks.id) ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      ))}
    </div>
  );
}
MusicList.propTypes = {
  onLikeToggle: PropTypes.func.isRequired,
  likedTracks: PropTypes.arrayOf(PropTypes.number).isRequired,
};
