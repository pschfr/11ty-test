// Require dependencies
const UglifyJS = require("uglify-js");

// Returns our minified JS to the page for inline usage
module.exports = function(code) {
	// Minify the code
	let minified = UglifyJS.minify(code);
	// Log if there's an error
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
	}
	// Returns it to the page
    return minified.code;
}
