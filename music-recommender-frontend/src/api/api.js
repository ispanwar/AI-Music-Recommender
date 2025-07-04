import axios from "axios";

const backendUrl = "http://localhost:5000";

const analyzeMood = (text) =>
  axios.post(`${backendUrl}/analyze-text`, { text });
const getPlaylists = (mood) => axios.post(`${backendUrl}/recommend`, { mood });

export { analyzeMood, getPlaylists };
