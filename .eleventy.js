// This file overrides any Eleventy settings we needed to change.
module.exports = function(eleventyConfig) {

	// Grabs all Markdown files in _posts
	eleventyConfig.addCollection("posts", function(collection) {
		return collection.getFilteredByGlob("_posts/*.md");
	});

	return {

	}
};
