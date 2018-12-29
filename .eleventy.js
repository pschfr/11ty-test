// This file overrides any Eleventy settings we needed to change.
module.exports = function() {
	return {
		// Changes deployment subdirectory for GitHub Pages
		// https://www.11ty.io/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix
		pathPrefix: "11ty-test"
	}
};
