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

function orderOccurrences(occurrences) {
	var newOccurrences = [];
	occurrences.forEach(function(occurrence) {
		if(newOccurrences.length === 0) {
			newOccurrences.push(occurrence);
		}
		else {
			var position = 0,
				length = newOccurrences.length;

			while(length > position) {
				if(newOccurrences[position][1] > occurrence[1]) {
					newOccurrences.splice(position, 0, occurrence);
					position = newOccurrences.length + 1;
				}
				else {
					position = position + 1;
				}
			}

			if(newOccurrences.length === position) {
				newOccurrences.push(occurrence);
			}
		}
	});

	return newOccurrences;
}

function combine(occurrences) {
	var first = occurrences.length > 0 ? occurrences[0] : ['', 0],
		second = occurrences.length > 1 ? occurrences[1] : ['', 0];

	if(occurrences.length === 0) return [];
	
	return [first[0] + second[0], first[1] + second[1]];
}

function makeTree() {
	return [['FEDA', 12, ['FED', 6, ['FE',3, ['F', 1], ['E', 2]], ['D', 3, null, null]], ['A', 6, null, null]], ['CB', 9, ['C', 4], ['B', 5]]];
}