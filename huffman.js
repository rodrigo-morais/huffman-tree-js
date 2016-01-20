function getOccurrences(expression) {
	var occurrences = [];

	expression.split('').forEach(function(word) {
		var position = 0;

		if(occurrences.length > 0) {
			while(position < occurrences.length && occurrences[position][0] != word) {
				position = position + 1; 
			}
		}
		
		if(occurrences.length <= position) {
			occurrences.push([word, 1]);
		}
		else {
			occurrences[position][1] = occurrences[position][1] + 1;
		}

	});

	return occurrences;
}