import { Song } from "./Song"

export const Songs =({allSongs, fn}) =>{
  return (
   <>
      {allSongs.map((currentSong, index) => (
        <Song fn = {fn} key={index} song={currentSong} />
      ))}
    </>
  );
};