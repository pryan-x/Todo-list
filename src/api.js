import axios from "axios";

// baseurl = "http://localhost:3001/api";

/* eslint-disable no-async-promise-executor */


class api {
  // get posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get('/');
        const data = res.data;
        resolve(
          data.map((post) => ({
            ...post,
            createdAt: new Date(post.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
  //Create post
  static insertPost(text) {
    return axios.post('/', {
      text,
    });
  }

  //delete post
  static deletePost(id) {
    return axios.delete(`/${id}`);
  }
}

export default api;