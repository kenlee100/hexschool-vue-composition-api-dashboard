import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import url from 'url';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: mode === 'production' ? env.VITE_BASE : '/',
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        imports: [
          'vue', // ref, computed, watch, onMounted ...
          'vue-router', // useRouter, useRoute ...
          'pinia' // defineStore, storeToRefs ...
        ],
        dirs: [
          'src/composables', // useApi, useFilters ... 自動引入
          'src/stores' // store 自動引入
        ],
        dts: true, // 產生 auto-imports.d.ts
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        }
      }),
      Components({
        dirs: ['src/components'],
        dts: true
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      port: 3001
    }
  };
});
