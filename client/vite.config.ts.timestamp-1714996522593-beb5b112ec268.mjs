// vite.config.ts
import react from 'file:///C:/Users/User/Desktop/webSocket-practise/client/node_modules/@vitejs/plugin-react/dist/index.mjs';
import { resolve } from 'path';
import {
    defineConfig,
    loadEnv,
} from 'file:///C:/Users/User/Desktop/webSocket-practise/client/node_modules/vite/dist/node/index.js';
import { createHtmlPlugin } from 'file:///C:/Users/User/Desktop/webSocket-practise/client/node_modules/vite-plugin-html/dist/index.mjs';
import tsconfigPaths from 'file:///C:/Users/User/Desktop/webSocket-practise/client/node_modules/vite-tsconfig-paths/dist/index.mjs';
var __vite_injected_original_dirname =
    'C:\\Users\\User\\Desktop\\webSocket-practise\\client';
var vite_config_default = defineConfig(({ mode }) => {
    const root = process.cwd();
    const env = loadEnv(mode, root);
    return {
        base: '/',
        plugins: [
            react(),
            tsconfigPaths(),
            createHtmlPlugin({
                minify: true,
                entry: '/src/main.tsx',
                inject: {
                    data: {
                        title: env.VITE_APP_TITLE,
                    },
                },
            }),
        ],
        css: { preprocessorOptions: { scss: { charset: false } } },
        resolve: {
            alias: {
                '@': resolve(__vite_injected_original_dirname, 'src'),
            },
        },
        server: {
            proxy: {
                '/api': {
                    target: 'http://apiserver.com/',
                    changeOrigin: true,
                },
            },
        },
        build: {
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                },
            },
        },
    };
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcd2ViU29ja2V0LXByYWN0aXNlXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXHdlYlNvY2tldC1wcmFjdGlzZVxcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1VzZXIvRGVza3RvcC93ZWJTb2NrZXQtcHJhY3Rpc2UvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuICAgIGNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCByb290KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJhc2U6ICcvJyxcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAgIHJlYWN0KCksXHJcbiAgICAgICAgICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICAgICAgICAgICAgY3JlYXRlSHRtbFBsdWdpbih7XHJcbiAgICAgICAgICAgICAgICBtaW5pZnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbnRyeTogJy9zcmMvbWFpbi50c3gnLFxyXG4gICAgICAgICAgICAgICAgaW5qZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZW52LlZJVEVfQVBQX1RJVExFLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNzczogeyBwcmVwcm9jZXNzb3JPcHRpb25zOiB7IHNjc3M6IHsgY2hhcnNldDogZmFsc2UgfSB9IH0sXHJcbiAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgICAgICAnL2FwaSc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vYXBpc2VydmVyLmNvbS8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidWlsZDoge1xyXG4gICAgICAgICAgICBtaW5pZnk6ICd0ZXJzZXInLFxyXG4gICAgICAgICAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb21wcmVzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsT0FBTyxXQUFXO0FBQzdWLFNBQVMsZUFBZTtBQUN4QixTQUFTLGNBQWMsZUFBZTtBQUN0QyxTQUFTLHdCQUF3QjtBQUNqQyxPQUFPLG1CQUFtQjtBQUoxQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN0QyxRQUFNLE9BQU8sUUFBUSxJQUFJO0FBQ3pCLFFBQU0sTUFBTSxRQUFRLE1BQU0sSUFBSTtBQUU5QixTQUFPO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxpQkFBaUI7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxVQUNKLE1BQU07QUFBQSxZQUNGLE9BQU8sSUFBSTtBQUFBLFVBQ2Y7QUFBQSxRQUNKO0FBQUEsTUFDSixDQUFDO0FBQUEsSUFDTDtBQUFBLElBQ0EsS0FBSyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxTQUFTLE1BQU0sRUFBRSxFQUFFO0FBQUEsSUFDekQsU0FBUztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0gsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUNqQztBQUFBLElBQ0o7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNKLE9BQU87QUFBQSxRQUNILFFBQVE7QUFBQSxVQUNKLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxRQUNsQjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsUUFDWCxVQUFVO0FBQUEsVUFDTixjQUFjO0FBQUEsVUFDZCxlQUFlO0FBQUEsUUFDbkI7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
