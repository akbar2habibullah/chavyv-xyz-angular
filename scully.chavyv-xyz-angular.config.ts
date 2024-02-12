import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-playwright';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'chavyv-xyz-angular',
  distFolder: './dist/chavyv-xyz-angular', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};
  puppeteerLaunchOptions: {
    args: ['--serverTimeout=60000'], // Add the --serverTimeout=x option to increase the timeout for Playwright
  },
