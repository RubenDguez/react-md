import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: false, // Optional: Makes expect, test, etc. globally available
    setupFiles: './setup.ts', // Path to your test setup file
    reporters: ['verbose'],
  },
});
