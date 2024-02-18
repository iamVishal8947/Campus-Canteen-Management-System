// webpack.config.js
module.exports = {
    // other webpack configurations...
    resolve: {
        fallback: {
            "util": require.resolve("node-util"),
            "buffer": require.resolve("node-buffer"),
            // Add more polyfills as needed
        }
    }
};
