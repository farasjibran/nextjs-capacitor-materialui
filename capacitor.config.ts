import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "nextjs-capacitor-materialui",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;
