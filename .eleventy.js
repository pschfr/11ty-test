// This file overrides any Eleventy settings we needed to change.
module.exports = function(eleventyConfig) {
	// Grabs all files in _posts
	eleventyConfig.addCollection("posts", function(collection) {
		return collection.getFilteredByGlob("posts/*.*");
	});

	// Simple date filter using toLocaleDateString
	eleventyConfig.addFilter("prettyDate", require("./_filters/prettyDate.js"));

	// CSS minification filter powered by clean-css
	eleventyConfig.addFilter("cssMin", require("./_filters/minifiers/css.js"));

	// JS minification filter powered by uglify-js
	eleventyConfig.addFilter("jsMin", require("./_filters/minifiers/js.js"));

	// HTML minification transform powered by html-minifier
	eleventyConfig.addTransform("htmlMin", require("./_filters/minifiers/html.js"));

	// Returns a profile image from Gravatar
	eleventyConfig.addShortcode("gravatar", require("./_filters/gravatar.js"));
};
