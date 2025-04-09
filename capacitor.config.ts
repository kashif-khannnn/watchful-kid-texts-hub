
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.786f8f13ffb6420d921aa54d6f3e10eb',
  appName: 'watchful-kid-texts-hub',
  webDir: 'dist',
  server: {
    url: 'https://786f8f13-ffb6-420d-921a-a54d6f3e10eb.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
      keystorePassword: null,
      keystoreAliasPassword: null,
    }
  }
};

export default config;
