export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "16px",
        md: "12px",
      },
      colors: {
        accent: "#6366f1",
        danger: "#ef4444",
        success: "#22c55e",
      },
    },
  },
  plugins: [],
};
