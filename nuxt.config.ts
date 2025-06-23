// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
// nuxt.config.ts

// Ya no necesitas importar "@tailwindcss/vite" aquí.
// Nuxt y el módulo @nuxtjs/tailwindcss lo manejarán por ti.
// import tailwindcss from "@tailwindcss/vite"; // <-- ¡Elimina o comenta esta línea!

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  // Tu archivo CSS principal de Tailwind.
  css: ["@/assets/css/main.css"],

  // ¡Esto es lo crucial! Añade el módulo oficial de Tailwind CSS para Nuxt.
  modules: [
    "@nuxtjs/tailwindcss",
  ],

  // Configuración de Vite.
  vite: {
    // Ya no necesitas 'plugins: [tailwindcss()]' aquí,
    // el módulo @nuxtjs/tailwindcss se encarga de eso.
    build: {
      sourcemap: true, // Esto asegura que los sourcemaps se generen para Vite en general.
    },
  },

  // Opcional: Puedes añadir una sección 'tailwindcss' si necesitas
  // configurar opciones específicas para el módulo, como la ruta de tu
  // archivo de configuración de Tailwind si no es el predeterminado.
  // tailwindcss: {
  //   configPath: 'tailwind.config.ts', // Si tu archivo de config de Tailwind no está en la raíz o tiene otro nombre
  //   cssPath: '~/assets/css/main.css', // Opcional, por si quieres ser explícito
  //   viewer: true, // Habilita el visor de Tailwind en desarrollo (útil)
  // },
});