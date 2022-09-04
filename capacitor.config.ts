import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.astrology.app',
  appName: 'astrology app',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    },
    Keyboard: {
      resizeOnFullScreen: true
    }
  }
};

export default config;
