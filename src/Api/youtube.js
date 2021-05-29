import axios from 'axios'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyD_phk8JNN-RqZ3kEBUb4MOgHCyp7kK8Ls',
    },
    //headers: {}
})