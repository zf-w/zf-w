import { defineConfig } from "vite"; 

const BYTES_UTILS_JS_NAME = "y2026_m05_bytes_utils";
const BYTES_UTILS_CSS_NAME = "y2026_m05_bytes_utils_styles";

const DEV_ALIAS_OBJECT = {
    BYTES_UTILS_JS_NAME: "C:/zf-w/web/y2026/m05/bytes_utils/src/lib.js",
    BYTES_UTILS_CSS_NAME: "C:/zf-w/web/y2026/m05/bytes_utils/src/styles.css"
};

const PROD_ALIAS_OBJECT = {
    BYTES_UTILS_JS_NAME: "/src/y2026/m05/bytes_utils.js",
    BYTES_UTILS_CSS_NAME: "/src/y2026/m05/bytes_utils.css"
};

const PROJECT_NAME = "sha3";

export default defineConfig(
    ({mode})=>({
        resolve: {
            alias: mode === "production"? PROD_ALIAS_OBJECT: DEV_ALIAS_OBJECT
        },
        build: {
            modulePreload: false,
            lib: {
                entry: "src/apps.js",
                name: PROJECT_NAME,
                fileName: PROJECT_NAME,
                cssFileName: PROJECT_NAME,
                formats: ["es"]
            },
            minify: "oxc",
            rolldownOptions: {
                external: [BYTES_UTILS_JS_NAME, BYTES_UTILS_CSS_NAME],
                output: {
                    minify: {
                        compress: {
                            target: "esnext",   
                            drop_console: true, 
                            drop_debugger: true, 
                        },
                        mangle: {
                            toplevel: false,
                        },
                        codegen: {
                            removeWhitespace: true,
                        },
                        sourcemap: false,
                    }
                }
            }
        }
    })
)