import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.astrology.app',
  appName: 'astrology app',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    Keyboard: {
      resizeOnFullScreen: true
    }
  }
};

export default config;
