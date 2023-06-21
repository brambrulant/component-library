module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-trunkrs-fe`
  extends: ["trunkrs-fe"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
