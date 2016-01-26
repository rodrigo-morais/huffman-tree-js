function getOccurrences(expression) {
	return expression.split('').map(function(letter, position, word) {
		var occurrences = expression.split('').filter(function(exp) {
			return exp === letter;
		}).length;
		if(word.indexOf(letter) === position){
			return [letter, occurrences];
		}
	}).filter(function(occurrence){
		return occurrence;
	});
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
				if(newOccurrences[position][1] >= occurrence[1]) {
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

function makeTree(expression) {
	var tree = [],
		occurrences = orderOccurrences(getOccurrences(expression));

	while(occurrences.length > 0) {
		var combination = combine(occurrences);

		if(occurrences.length > 1) {
			combination
				.push(
					occurrences[1],
					occurrences[0]
				);
		}

		occurrences.reverse().pop();
		occurrences.pop();

		if(occurrences.length > 0) {
			occurrences.push(combination);
		}
		else {
			tree = combination;
		}

		occurrences = orderOccurrences(occurrences);
	}

	return tree;	
}

function _addBits(node, bits, list) {
	if(node[2] === undefined) {
		list.push([node[0], bits]);
	}
	else {
		_addBits(node[2], bits + '0', list);
		_addBits(node[3], bits + '1', list);
	}
}

function _getBits(expression, list) {
	var result = '';

	expression.split('').forEach(function(letter) {
		var value = list.filter(function(bits) {
			return bits[0] === letter;
		});
		result = result + (value.length > 0 ? value[0][1] : '');
	});

	return result;
}

function encode(expression) {
	var tree = makeTree(expression),
		listOfBits = [];

	_addBits(tree, '', listOfBits);

	return _getBits(expression, listOfBits);
}