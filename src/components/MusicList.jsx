// import React from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";

const tracks = [
  {
    id: 1,
    name: "Telefono",
    artist: "PH1",
    releaseDate: "2020-07-17",
    cover: "../../src/assets/telefono.jpg",
  },
  {
    id: 2,
    name: "Hate You",
    artist: "PH1",
    releaseDate: "2020-08-28",
    cover: "../../src/assets/hate_you.jpg",
  },
  {
    id: 3,
    name: "Malibu",
    artist: "PH1",
    releaseDate: "2019-07-19",
    cover: "../../src/assets/malibu.jpg",
  },
];

export default function MusicList({ onLikeToggle, likedTracks }) {
  return (
    <div>
      <h2>PH1 Music List</h2>
      {tracks.map((track) => (
        <div key={track.id}>
          <img src={track.cover} alt={track.name} />
          <p>
            {track.name} - {track.artist}
          </p>
          <p>Release Date: {track.releaseDate}</p>
          <button onClick={() => onLikeToggle(track.id)}>
            {likedTracks.includes(track.id) ? <FaHeart /> : <FaRegHeart />}
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
