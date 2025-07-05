import { Player } from "../components/Player";
import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { getSongs } from "../services/apiClient";
import {useEffect, useState} from "react";

export const SearchPage = () => {
  const[allSongs, setSongs] = useState([]);
  const[flag, setFlag] = useState(false);
  const[song, setSong] = useState(null);
  const loadSongs = async () =>{
    setSongs(await getSongs('Latest Songs'));
  }
  useEffect( () => {
    loadSongs();
  },[])

  const togglePlayer = (flag, songarg) => {
    setSong(songarg);
    setFlag(flag);
  }
  const getArtistName = async (artistName) =>{
    console.log("Receive Artist Name", artistName);
    setSongs(await getSongs(artistName));
  }
  const jsx = <> <Search fn = {getArtistName}/>
  <Songs fn ={togglePlayer} allSongs= {allSongs} /></>
  return (
    <div className="container">
      <h1 className = "alert alert-info text-center">Music Store</h1>
      {flag?<Player fn ={togglePlayer} song = {song}/> : jsx}
    </div>
  );
};
