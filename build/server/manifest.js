const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-37981e54.js","imports":["_app/immutable/start-37981e54.js","_app/immutable/chunks/index-060bebda.js","_app/immutable/chunks/singletons-9b082416.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-728109fc.js'),
			() => import('./chunks/1-c51c1e33.js'),
			() => import('./chunks/2-e6f001c9.js'),
			() => import('./chunks/3-5c487f66.js'),
			() => import('./chunks/4-d31a54a6.js'),
			() => import('./chunks/5-d823bcd4.js'),
			() => import('./chunks/6-af34240f.js'),
			() => import('./chunks/7-3cc85b04.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "calendar2",
				pattern: /^\/calendar2\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "create",
				pattern: /^\/create\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "findfeature",
				pattern: /^\/findfeature\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "schedule",
				pattern: /^\/schedule\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "settings",
				pattern: /^\/settings\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
