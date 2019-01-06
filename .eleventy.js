// This file overrides any Eleventy settings we needed to change.
module.exports = function(eleventyConfig) {
	// Grabs all files in _posts
	eleventyConfig.addCollection("posts", function(collection) {
		return collection.getFilteredByGlob("posts/*.*");
	});

	// Simple date filter using toLocaleDateString
	eleventyConfig.addFilter("prettyDate", require("./_filters/prettyDate.js"));

	// CSS minification filter powered by clean-css
	eleventyConfig.addFilter("cssMin", require("./_filters/cssMin.js"));
};
