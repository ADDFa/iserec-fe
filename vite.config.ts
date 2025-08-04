import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsCofigPaths from "vite-tsconfig-paths"

const chunks = (id: string) => {
    if (id.includes("node_modules")) {
        if (id.includes("@fortawesome")) {
            return "chunk-fontawesome"
        }

        if (id.includes("antd")) {
            return "chunk-antd"
        }

        if (id.includes("i18next") || id.includes("react-i18next")) {
            return "chunk-i18n"
        }

        if (id.includes("react-bootstrap")) {
            return "chunk-bootstrap"
        }

        if (id.includes("react-router")) {
            return "chunk-router"
        }

        if (id.includes("react") || id.includes("react-dom")) {
            return "chunk-react"
        }

        return "vendor" // fallback untuk library lain di node_modules
    }
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsCofigPaths()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: chunks
            }
        }
    }
})
