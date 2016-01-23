//var huffman = require('../huffman.js');

describe("Huffmann tree", function() {
  it("receive an ordered expression as 'AAAAAABBBBBCCCCDDDEEF' and return an array with number of occurrences", function() {
    var occurrences = getOccurrences('AAAAAABBBBBCCCCDDDEEF'),
        result = [['A', 6], ['B', 5], ['C', 4], ['D', 3], ['E', 2], ['F', 1]];

    expect(result).toEqual(occurrences);
  });

  it("receive an unordered expression as 'EEAAAAAACCCCFDDDBBBBB' and return an array with number of occurrences", function() {
    var occurrences = getOccurrences('EEAAAAAACCCCFDDDBBBBB'),
        result = [['E', 2], ['A', 6], ['C', 4], ['F', 1], ['D', 3], ['B', 5]];

    expect(result).toEqual(occurrences);
  });

  it("receive an unordered occurrences as '['E', 2], ['A', 6], ['C', 4], ['F', 1], ['D', 3], ['B', 5]]' and return an ordered array", function() {
    var occurrences = [['E', 2], ['A', 6], ['C', 4], ['F', 1], ['D', 3], ['B', 5]],
        finalOccurrence = [['F', 1], ['E', 2], ['D', 3], ['C', 4], ['B', 5], ['A', 6]];

    expect(finalOccurrence).toEqual(orderOccurrences(occurrences));
  });

  it("receive an ordered occurrences as '[['F', 1], ['E', 2], ['D', 3], ['C', 4], ['B', 5], ['A', 6]]' and return an ordered array", function() {
    var occurrences = [['F', 1], ['E', 2], ['D', 3], ['C', 4], ['B', 5], ['A', 6]],
        finalOccurrence = [['F', 1], ['E', 2], ['D', 3], ['C', 4], ['B', 5], ['A', 6]];

    expect(finalOccurrence).toEqual(orderOccurrences(occurrences));
  });

  it("receive an reversed occurrences as '[['A', 6], ['B', 5], ['C', 4], ['D', 3], ['E', 2], ['F', 1]]' and return an ordered array", function() {
    var occurrences = [['A', 6], ['B', 5], ['C', 4], ['D', 3], ['E', 2], ['F', 1]],
        finalOccurrence = [['F', 1], ['E', 2], ['D', 3], ['C', 4], ['B', 5], ['A', 6]];

    expect(finalOccurrence).toEqual(orderOccurrences(occurrences));
  });
});