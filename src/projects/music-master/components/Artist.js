import React from "react";

const Artist = ({ artist }) => {
  if (artist === null) return null;

  const { images, followers, name, genres } = artist;
  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(",")}</p>
      <img
        style={{
          height: 200,
          width: 200,
          borderRadius: 100,
          objectFit: "cover",
        }}
        alt="artist-image"
        src={images[0] && images[0].url}
      />
    </div>
  );
};

export default Artist;
