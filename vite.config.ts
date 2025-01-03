import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

export default defineConfig(
  ({ mode }) =>
    ({
      resolve: {
        conditions: mode === 'test' ? ['browser'] : []
      },
      plugins: [sveltekit()],
      test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.js']
      }
    }) as UserConfig
);
