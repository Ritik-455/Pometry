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
        "jakarta": "'Plus Jakarta Sans',sans-serif",
        "courier": "'Courier Prime',monospace",
      },
      colors: {
        jet_black: "#111111",
        dark_red: "#9D2035",
        light_black: "#FFFFFF1A",
        green: "#00c136",
        yellow: "#EDF127",
        light_red: "#9D20351A",
        bright_yellow: "#EDF127"
      },
      boxShadow: {
        "3xl": "0px 8px 41px 0px #00000014",
      },
      container: {
        padding: {
          DEFAULT: "20px",
          sm: "24px",
          xl: "20px",
        },
        center: true,
      },
      backgroundImage: {
        mix_red: "linear-gradient(96.09deg, #E31930 0%, #F3576E 100%)",
        light_red: "linear-gradient(96.09deg, rgba(227, 25, 48, 0.1) 0%, rgba(243, 87, 110, 0.1) 100%)",
        light_black: "linear-gradient(96.09deg, rgba(128, 24, 225, 0.02) 0%, rgba(144, 11, 226, 0.02) 100%)"
      },
    },
  },
  plugins: [],
};
export default config;
