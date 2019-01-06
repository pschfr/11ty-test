// Simple date filter using toLocaleDateString
module.exports = function(value) {
	return new Date(value).toLocaleDateString("en-US", {
		timeZone: "UTC",
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
