module.exports = {
    "*.js": ["npm run lint", "jest --bail --findRelatedTests", "git add"],
    "*.json": ["prettier --write"]
};
