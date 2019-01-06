// Require dependencies
const CleanCSS = require("clean-css");

// Returns our minified CSS to the page for inline usage
module.exports = function(code) {
	return new CleanCSS().minify(code).styles;
}
