import type { NextConfig } from "next";
import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: [
            "javascript",
            "typescript",
            "html",
            "json",
            "css",
            "scss",
            "cpp",
            "objective-c",
            "yaml",
            "shell",
            "dockerfile",
            "markdown",
            "php",
            "xml",
            "shell",
            "java",
          ],
          filename: "static/[name].worker.js",
        }),
      );
    }
    return config;
  },
};

export default nextConfig;
