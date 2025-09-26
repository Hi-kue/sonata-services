import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */

// NOTE: Checkout docs for information about preprocessors: https://svelte.dev/docs/kit/integrations
const config = {
  preprocess: [vitePreprocess(), mdsvex()],
  kit: {
    adapter: adapter(),
  },
  extensions: [".svelte", ".svx"],
};

export default config;
