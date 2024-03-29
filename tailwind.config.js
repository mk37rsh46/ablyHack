/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  safelist: [
    "border-[#9951F5]",
    "border-[#7A1BF2]",
    "border-[#5F0BC9]",
    "border-[#460894]",
    "border-[#00E80B]",
    "border-[#00C008]",
    "border-[#008E06]",
    "border-[#FF17D2]",
    "border-[#D400AB]",
    "border-[#9C007E]",
    "border-[#2CC0FF]",
    "border-[#00A5EC]",
    "border-[#0284CD]",
    "border-[#E4B200]",
    "border-[#AC8600]",
    "bg-[#9951F5]",
    "bg-[#7A1BF2]",
    "bg-[#5F0BC9]",
    "bg-[#460894]",
    "bg-[#00E80B]",
    "bg-[#00C008]",
    "bg-[#008E06]",
    "bg-[#FF17D2]",
    "bg-[#D400AB]",
    "bg-[#9C007E]",
    "bg-[#2CC0FF]",
    "bg-[#00A5EC]",
    "bg-[#0284CD]",
    "bg-[#E4B200]",
    "bg-[#AC8600]",
  ],

  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      "slate-50": "#F4F8FB",
      "slate-100": "#f1f5f9",
      "slate-150": "#EDF1F6",
      "slate-200": "#e2e8f0",
      "slate-250": "#E2E7EF",
      "slate-300": "#cbd5e1",
      "slate-400": "#94a3b8",
      "slate-500": "#64748b",
      "slate-600": "#475569",
      "slate-700": "#334155",
      "slate-800": "#1e293b",
      "slate-900": "#0f172a",
      "gray-100": "#f3f4f6",
      "gray-200": "#e5e7eb",
      "gray-300": "#d1d5db",
      "gray-325": "#ADB6C2",
      "gray-350": "#C6CED9",
      "gray-400": "#9ca3af",
      "gray-500": "#6b7280",
      "gray-600": "#4b5563",
      "gray-700": "#374151",
      "gray-800": "#1f2937",
      "gray-900": "#111827",
      "orange-100": "#FFF5F1",
      "orange-200": "#FFE3D8",
      "orange-300": "#FFC4AE",
      "orange-400": "#FF9B79",
      "orange-500": "#FF723F",
      "orange-600": "#FF5416",
      "orange-700": "#FE372B",
      "orange-800": "#E40000",
      "orange-900": "#B82202",
      "orange-1000": "#751500",
      "orange-1100": "#2A0B00",
      "yellow-100": "#FFFBEF",
      "yellow-200": "#FFF0BA",
      "yellow-300": "#FFE27C",
      "yellow-400": "#FFD43D",
      "yellow-500": "#FFC700",
      "yellow-600": "#E4B200",
      "yellow-700": "#AC8600",
      "yellow-800": "#654F00",
      "yellow-900": "#291C01",
      "green-100": "#F1FFF1",
      "green-200": "#B8FFBB",
      "green-300": "#80FF85",
      "green-400": "#08FF13",
      "green-500": "#00E80B",
      "green-600": "#00C008",
      "green-700": "#008E06",
      "green-800": "#005303",
      "green-900": "#002A02",
      "blue-100": "#F1FBFF",
      "blue-200": "#B8EAFF",
      "blue-300": "#80D9FF",
      "blue-400": "#4AD4FF",
      "blue-500": "#2CC0FF",
      "blue-600": "#00A5EC",
      "blue-700": "#0284CD",
      "blue-800": "#004B75",
      "blue-900": "#001B2A",
      "purple-100": "#F7F2FE",
      "purple-200": "#D8BCFB",
      "purple-300": "#B986F8",
      "purple-400": "#9951F5",
      "purple-500": "#7A1BF2",
      "purple-600": "#5F0BC9",
      "purple-700": "#460894",
      "purple-800": "#2D055E",
      "purple-900": "#130228",
      "pink-100": "#FFF1FC",
      "pink-200": "#FFB8F1",
      "pink-300": "#FF80E6",
      "pink-400": "#FF47DB",
      "pink-500": "#FF17D2",
      "pink-600": "#D400AB",
      "pink-700": "#9C007E",
      "pink-800": "#630050",
      "pink-900": "#2A0022",
      "red-100": "#FFF1F1",
      "red-600": "#E40000",
      "dark-layer-1": "rgb(40,40,40)",
      "dark-layer-2": "rgb(26,26,26)",
      "dark-label-2": "rgba(239, 241, 246, 0.75)",
      "dark-divider-border-2": "rgb(61, 61, 61)",
      "dark-fill-2": "hsla(0,0%,100%,.14)",
      "dark-fill-3": "hsla(0,0%,100%,.1)",
      "dark-gray-6": "rgb(138, 138, 138)",
      "dark-gray-7": "rgb(179, 179, 179)",
      "gray-8": "rgb(38, 38, 38)",
      "dark-gray-8": "rgb(219, 219, 219)",
      "brand-orange": "rgb(255 161 22)",
      "brand-orange-s": "rgb(193, 122, 15)",
      "dark-yellow": "rgb(255 192 30)",
      "dark-pink": "rgb(255 55 95)",
      olive: "rgb(0, 184, 163)",
      "dark-green-s": "rgb(44 187 93)",
      "dark-blue-s": "rgb(10 132 255)",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
