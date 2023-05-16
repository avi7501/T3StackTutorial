import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#15141B',
        'sidebar': '#191922',
        'selected': '#201E2C',
        'search': '#1F1E24',
        'secondary': '#F3F5F7',
        'accent': '#FFC831',
      },
    },
  },
  plugins: [],
} satisfies Config;
