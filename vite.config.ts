import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // 必要に応じて、ビルド後の出力先などを指定
    build: {
        outDir: 'dist',
    },
    server: {
        open: true, // 起動時にブラウザを自動で開く
    }
});