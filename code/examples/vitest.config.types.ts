import { defineConfig, mergeConfig } from 'vitest/config';
import baseConfig from './vitest.config.ts';

const config = defineConfig({
  test: {
    typecheck: {
      enabled: true,
      only: true, // ignore "normal" tests
      ignoreSourceErrors: true, // ignore type errors from other files
    },
  },
});

export default mergeConfig(baseConfig, config);
