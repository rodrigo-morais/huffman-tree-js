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
	return occurrences.sort(function(current, next) {
		if(current[1] === next[1]) {
			return 1;
		}
		return current[1] - next[1];
	});
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
	
	function recursive(occurrences) {
		if(occurrences.length === 0) {
			return [];
		}
		else if(occurrences.length === 1) {
			return occurrences[0];
		}
		else {
			var combination = combine(occurrences);

			combination
				.push(
					occurrences[1],
					occurrences[0]
				);

			occurrences = occurrences.slice(2, occurrences.length);

			occurrences.unshift(combination);

			return recursive(orderOccurrences(occurrences));
		}
	}

	return recursive(occurrences);
}

function _addBits(node, bits) {
	if(node[2] === undefined) {
		return [[node[0], bits]];
	}
	else {
		return _addBits(node[2], bits + '0').concat(_addBits(node[3], bits + '1'));
	}
}

function _getBits(expression, list) {
	if(expression === '') {
		return '';
	}
	else {
		var bits = list.filter(function(node) {
			return node[0] === expression.charAt(0);
		});

	 	return (bits.length > 0 ? bits[0][1] : '') + _getBits(expression.slice(1), list);
	}
}

function encode(expression) {
	return _getBits(expression, _addBits(makeTree(expression), ''));
}