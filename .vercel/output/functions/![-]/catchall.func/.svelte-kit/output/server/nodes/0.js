import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CZG79V6L.js","_app/immutable/chunks/BPV0QSvi.js","_app/immutable/chunks/Dtz2rZdc.js","_app/immutable/chunks/DtIdZJBk.js","_app/immutable/chunks/zm9SdpeR.js"];
export const stylesheets = ["_app/immutable/assets/0.DiQPzPXN.css"];
export const fonts = [];
