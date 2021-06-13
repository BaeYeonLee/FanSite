import users from "./users";

export default {
  install(app, options) {
    app.config.globalProperties.$api = this;
  },

  async multiRequest(...request) {
    return Promise.all(...request);
  },

  // API
  ...users,
};
