function share(URL) {
	navigator.share({
		title: document.title,
		text: "Share test",
		url: URL
	}).then(() => console.log('Successful share'))
      .catch((error) => console.error('Error sharing', error));
}
