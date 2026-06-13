export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.D98O0cql.js",app:"_app/immutable/entry/app.CdPr4BVR.js",imports:["_app/immutable/entry/start.D98O0cql.js","_app/immutable/chunks/D5DrLagF.js","_app/immutable/chunks/Dtz2rZdc.js","_app/immutable/chunks/D-2F3yRN.js","_app/immutable/entry/app.CdPr4BVR.js","_app/immutable/chunks/Dtz2rZdc.js","_app/immutable/chunks/Br3srQki.js","_app/immutable/chunks/BPV0QSvi.js","_app/immutable/chunks/D-2F3yRN.js","_app/immutable/chunks/-ixNRfEd.js","_app/immutable/chunks/DtIdZJBk.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
