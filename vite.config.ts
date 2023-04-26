import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        https: false,
        hmr: {
            protocol: "ws",
            host: "localhost",
            port: 3000,
        },
    },
    resolve: {
        alias: {
            "@typings": "/src/types",
            "@theme": "/src/theme",
            "@components": "/src/components",
            "@containers": "/src/containers",
            "@pages": "/src/pages",
            "@utils": "/src/utils",
            src: "/src",
        },
    },
});
