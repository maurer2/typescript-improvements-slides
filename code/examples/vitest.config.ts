import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    silent: true,
    typecheck: {
      enabled: true,
      only: true, // ignore "normal" tests
      ignoreSourceErrors: true, // ignore type errors from other files
    },
  },
});
