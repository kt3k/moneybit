const { defineConfig } = require("vitest/config");

module.exports = defineConfig({
  test: {
    include: ["packages/{,**/}__tests__/**/*.js"],
  },
});
