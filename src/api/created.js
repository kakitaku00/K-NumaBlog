import axios from 'axios';

const microApi = axios.create({
  baseURL: "https://kakki-blog.microcms.io/api/v1",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.X_CREATED_API_KEY
  },
  responseType: 'json'
})

export default microApi