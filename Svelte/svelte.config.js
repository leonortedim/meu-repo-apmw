// svelte.config.js
import adapterGhpages from "svelte-adapter-ghpages";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // ...
  kit: {
    // ...
    paths: {
      base: "/meu-repo-apmw/Svelte",
    },
    // ...
    adapter: adapterGhpages(
      
    ),
    // ...
  },
};

export default config;