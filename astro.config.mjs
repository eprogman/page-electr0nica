// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions'; // or '@astrojs/netlify/edge' depending on the target
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  devToolbar: {
    enabled: false
  },

});