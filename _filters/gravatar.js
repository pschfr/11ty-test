// Require dependencies
const gravatar = require('gravatar');

module.exports = function(email, size) {
	// Save the URL returned from Gravatar, loaded over HTTPS of course
	const avatarURL = gravatar.url(email, { s: size, protocol: 'https' });

	// Returns the image tag to Eleventy
	return `<img src="${avatarURL}" alt="image of ${email}" title="image of ${email}" />`;
}
