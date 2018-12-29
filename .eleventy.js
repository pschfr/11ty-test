// This file overrides any Eleventy settings we needed to change.
module.exports = function(eleventyConfig) {
	// Grabs all files in _posts
	eleventyConfig.addCollection("posts", function(collection) {
		return collection.getFilteredByGlob("_posts/*.*");
	});

	// Simple date filter using toLocaleDateString
	eleventyConfig.addFilter("prettyDate", function(value) {
		return new Date(value).toLocaleDateString("en-US", {
			timeZone: "UTC",
			month: "long",
			day: "numeric",
			year: "numeric"
		});
	});
};
