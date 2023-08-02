import { PlaywrightTestConfig, devices } from '@playwright/test';
import { SKIP_AUTH } from '../src/config';

const config: PlaywrightTestConfig = {
  …
globalSetup: process.env.SKIP_AUTH ? '' : './globalSetup',
  use: {
    …
  storageState: './setup/storage-state.json',
  },
  …
};

export default config;
