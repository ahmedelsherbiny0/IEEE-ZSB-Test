import {
  defineConfig,
  createSystem,
  SystemConfig,
  defaultConfig,
} from "@chakra-ui/react";

const config: SystemConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        // Background colors
        bg: { value: { _light: "#f9fdff", _dark: "#00101a" } },
        fg: { value: { _light: "#e0f2fa", _dark: "#e0f2fa" } },

        "natural-1": { value: { _light: "#FFFFFF", _dark: "#000000" } },
        "natural-2": { value: { _light: "#000000", _dark: "#FFFFFF" } },

        // Text colors
        "text-1": { value: { _light: "#FFFFFF", _dark: "#FFFFFF" } },
        "text-2": { value: { _light: "#E0F2FA", _dark: "#E0F2FA" } },
        "text-3": { value: { _light: "#FFFFFF", _dark: "#A0D4EB" } },
        "text-4": {
          value: {
            _light: "rgba(255, 255, 255, 0.8)",
            _dark: "rgba(255, 255, 255, 0.8)",
          },
        },
        "text-5": {
          value: {
            _light: "rgba(255, 255, 255, 0.5)",
            _dark: "rgba(255, 255, 255, 0.5)",
          },
        },

        // Card colors
        "card-bg-1": { value: { _light: "#006699", _dark: "#002235" } },
        "card-border-1": { value: { _light: "#1187C9", _dark: "#003A5A" } },
        "card-bg-2": {
          value: {
            _light: "rgba(6, 62, 91, 0.8)",
            _dark: "rgba(0, 102, 156, 0.8)",
          },
        },
        "card-border-2": {
          value: {
            _light: "#004B75",
            _dark: "#0076B8",
          },
        },
        "card-bg-3": {
          value: {
            _light: "rgba(0, 102, 156, 0.9)",
            _dark: "rgba(0, 34, 53, 0.8)",
          },
        },
        "card-border-3": {
          value: {
            _light: "#1187C9",
            _dark: "#003A5A",
          },
        },

        // Chip colors
        "chip-bg-1": { value: { _light: "#ffc100", _dark: "#ffc100" } },
        "chip-border-1": { value: { _light: "#664f00", _dark: "#664f00" } },
        "chip-bg-2": { value: { _light: "#a0d4eb", _dark: "#a0d4eb" } },
        "chip-border-3": { value: { _light: "#00669c", _dark: "#00669c" } },

        // Buttons colors
        "btn-bg-1": { value: { _light: "#004164", _dark: "#00669c" } },
        "btn-text-1": { value: { _light: "#e0f2fa", _dark: "#e0f2fa" } },
        "btn-bg-2": { value: { _light: "#a0d4eb", _dark: "#a0d4eb" } },
        "btn-text-2": { value: { _light: "#00669c", _dark: "#00669c" } },
        "btn-bg-3": { value: { _light: "#e0f2fa", _dark: "#e0f2fa" } },
        "btn-text-3": { value: { _light: "#005481", _dark: "#005481" } },

        // Basic colors
        white: { value: { _light: "#ffffff", _dark: "#ffffff" } },
        black: { value: { _light: "#000000", _dark: "#000000" } },

        // IEEE ZSB colors
        primary: { value: { _light: "#00669c", _dark: "#00669c" } },
        secondary: { value: { _light: "#ffc000", _dark: "#ffc000" } },

        // IEEE ZSB Chapter colors
        "cs-1": { value: { _light: "#354a5f", _dark: "#354a5f" } },
        "cs-2": { value: { _light: "#d3d6db", _dark: "#d3d6db" } },

        "ras-1": { value: { _light: "#f08114", _dark: "#f08114" } },
        "ras-2": { value: { _light: "#f8e2cb", _dark: "#f8e2cb" } },

        "pes-1": { value: { _light: "#6eb43f", _dark: "#6eb43f" } },
        "pes-2": { value: { _light: "#e1ead5", _dark: "#e1ead5" } },

        "wie-1": { value: { _light: "#802c92", _dark: "#802c92" } },
        "wie-2": { value: { _light: "#e2d1e4", _dark: "#e2d1e4" } },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
