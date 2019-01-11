// Require dependencies used here
const Nunjucks = require("nunjucks");

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

	// Sets up a custom Nunjucks environment, so we can include items from node_modules
	let nunjucksEnvironment = new Nunjucks.Environment(
		new Nunjucks.FileSystemLoader(["_includes", "node_modules"])
	);

	// Sets Eleventy to use our Nunjucks environment instead of the default
	eleventyConfig.setLibrary("njk", nunjucksEnvironment);
};
