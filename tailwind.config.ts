import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jakarta ": "'Plus Jakarta Sans',sans-serif",
        "courier": "'Courier Prime',monospace"
      },
      colors: {
        black: "#111111",
        dark_red: "#9D2035",
        light_black: "#FFFFFF1A",
        green: "#00c136",
        yellow: "#EDF127",
        light_red: "#9D20351A"
      },
      container: {
        padding: {
          DEFAULT: "20px",
          sm: "24px",
          xl: "20px",
        },
        center: true,
      }
    },
  },
  plugins: [],
};
export default config;
