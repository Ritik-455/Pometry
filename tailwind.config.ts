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
        courier: "'Courier Prime',monospace",
      },
      colors: {
        black: "#111111",
        dark_red: "#9D2035",
        light_black: "#FFFFFF1A",
        green: "#00c136",
        yellow: "#EDF127",
        light_red: "#9D20351A",
      },
      boxShadow: {
        "3xl": "0px 8px 41px 0px #00000014",
        "4xl": "0px 0px 0px 2px #9D20351A, 0px 0px 15px #ffffff",
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
      },
    },
  },
  plugins: [],
};
export default config;
