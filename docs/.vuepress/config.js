module.exports = {
	base: '/cordova-doc/',
	title: 'cordova',
	description: '了解cordova，了解混合移动开发模式',
	configureWebpack: {
    resolve: {
      alias: {
        '@image': 'notes/images'
      }
		}
	},
	themeConfig: {
		docsDir: 'docs',
		editLinks: true,
		sidebarDepth: 3,
		locales: {
			'/': {
				label: 'English',
				editLinkText: 'Edit this page on GitHub',
				nav: [
					// {
						// text: 'vue',
						// link: '/notes/cordova'
					// }
				],
				sidebar: {
					'/notes/': [
						{
								title: 'cordova',
								collapsable: false,
								children: [
									'/notes/cordova.md',
									'/notes/cordova-hcp.md',
									'/notes/cordova-ios.md',
									'/notes/jenkins.md'
								]
						}
					]
				}
			}
		}
	}
}
