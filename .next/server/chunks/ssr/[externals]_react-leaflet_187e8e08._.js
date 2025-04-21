module.exports = {

"[externals]/react-leaflet [external] (react-leaflet, esm_import, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_react-leaflet_c77a1e0b._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/react-leaflet [external] (react-leaflet, esm_import)");
    });
});
}}),

};