// Require dependencies
const htmlmin = require("html-minifier");

// Returns the minified HTML to the page
module.exports = function(content, outputPath) {
	// If running on production, continue...
	if (process.env.ELEVENTY_ENV == "production") {
		// If it's a HTML file,
    	if (outputPath.indexOf(".html") > -1) {
			// Minify it!
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});
			return minified;
		}
	}
	return content;
}
