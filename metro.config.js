const { getDefaultConfig } = require("@expo/metro-config");

// Getting default metro config 🎣
const defaultConfig = getDefaultConfig(__dirname);

// Making changes in default metro config 🔨
defaultConfig.resolver.assetExts.push("cjs");

// Exporting updated metro config 🦢
module.exports = defaultConfig;
