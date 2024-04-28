import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import checker from 'vite-plugin-checker';
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'ES2020',
    outDir: 'build',
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: true,
  },
  plugins: [
    react(),
    babel({
      babelConfig: {
        presets: [
          [
            '@babel/preset-react',
            { runtime: 'automatic', importSource: '@emotion/react' },
          ],
        ],
        babelrc: false,
        configFile: false,
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@customTypes': '/src/types',
      '@styles': '/src/styles',
      '@pages': '/src/pages',
      '@svg': '/src/svg',
      '@ui': '/src/ui',
      '@store': '/src/store',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
    },
  },
});
