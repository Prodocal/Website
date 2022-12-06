export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-37981e54.js","imports":["_app/immutable/start-37981e54.js","_app/immutable/chunks/index-060bebda.js","_app/immutable/chunks/singletons-9b082416.js"],"stylesheets":[]},
		nodes: [
			() => import('.//nodes/0.js'),
			() => import('.//nodes/1.js'),
			() => import('.//nodes/2.js'),
			() => import('.//nodes/3.js'),
			() => import('.//nodes/4.js'),
			() => import('.//nodes/5.js'),
			() => import('.//nodes/6.js'),
			() => import('.//nodes/7.js')
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