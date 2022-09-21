const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 10000,
  viewportWidth: 1280,
  viewportHeight: 800,
  video: true,
  chromeWebSecurity: false,
  watchForFileChanges: false,

  env: {
    username: 'inter@gmail.com',
    password: 'Aa123123'
  },

  retries: {
    runMode: 3,
    openMode: 2,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://cocktailale.web.app',
  },
});
