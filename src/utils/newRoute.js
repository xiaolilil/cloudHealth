export function generateRoute(data) {
	const newRoutes = data.map(i => {
		const asyncRoute = {
			path: i.path,
			name: i.name,
            meta:{title:i.title},
			component: () => import(`@/views/${i.pathName}`)
		}

		if (i.children) {
			route.children = generateRoute(i.children)
		}

		return asyncRoute
	})

	return newRoutes
}
