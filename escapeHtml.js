var entityMap = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#39;',
		'/': '&#x2F;',
		'&amp;': '&',
		'&lt;': '<',
		'&gt;': '>' ,
		'&quot;': '"',
		'&#39;': "'" ,
		'&#x2F;': '/'
	};

function htmlEscape(string) {
	return String(string).replace(/[&<>"'\/]/g, function(s) {
		return entityMap[s];
	});
}
