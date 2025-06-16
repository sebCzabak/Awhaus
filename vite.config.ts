import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const repoName = 'https://github.com/sebCzabak/Awhaus';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // <--- WAŻNA ZMIANA DLA GITHUB PAGES
  build: {
    outDir: 'dist', // Domyślny katalog wyjściowy
  }
});