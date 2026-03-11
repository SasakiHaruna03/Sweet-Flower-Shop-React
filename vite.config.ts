import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    // React の JSX 構文を解釈できるようにプラグインを追加
    plugins: [react()],
    resolve: {
        // pnpm 環境で複数の React が読み込まれるケースを防ぐ
        dedupe: ["react", "react-dom"],
    },
});