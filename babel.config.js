module.exports = function (api) {
  api.cache(true);
  const presets = ["@babel/preset-env"];
  const plugins = ['./pluginTest/babel-plugin-logFunctionName'];
  return {
    presets,
    plugins
  };
} 