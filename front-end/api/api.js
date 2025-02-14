import axios from "axios";

// const { NODE_ENV } = process.env
// const url = "http://localhost:3001/api";
const url = "https://spotify-project-tclx.onrender.com/api";

const resArtists = await axios.get(`${url}/artists`);
const resSongs = await axios.get(`${url}/songs`);

export const artistArray = resArtists.data;
export const songsArray = resSongs.data;
