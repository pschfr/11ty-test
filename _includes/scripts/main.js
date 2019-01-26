function share(URL) {
	navigator.share({
		title: document.title,
		text: "Share test",
		url: URL
	}).then(function() {
		console.log('Successful share');
	})
      .catch(function(error) {
		console.error('Error sharing', error);
	});
}
