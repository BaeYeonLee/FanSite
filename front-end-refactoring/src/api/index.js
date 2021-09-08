import users from "./users";
import album from "./album";
import track from "./track";

export default {
  install(app, options) {
    app.config.globalProperties.$api = this;
  },

  async multiRequest(...request) {
    return Promise.all(...request);
  },

  // API
  users,
  album,
  track,
};
