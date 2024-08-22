import axios from 'axios';

// Create and export an Axios instance configured for the YouTube Data API
const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

export default youtube;