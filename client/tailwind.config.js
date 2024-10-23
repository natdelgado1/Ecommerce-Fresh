/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Si usas la carpeta `pages`
    './components/**/*.{js,ts,jsx,tsx}', // Si usas una carpeta `components`
    './app/**/*.{js,ts,jsx,tsx}', // Si usas la carpeta `app`
    './src/**/*.{js,ts,jsx,tsx}', // Incluye cualquier archivo en `src`
  ],
  theme: {
    extend: {
      colors: {
        // Definir colores personalizados si lo necesitas
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
      },
      borderRadius: {
        lg: 'var(--radius)',
      },
    },
  },
  plugins: [],
}
