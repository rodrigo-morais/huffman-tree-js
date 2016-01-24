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

  it("receive a totally unordered expression as 'EAAEAACACBDCFDDBABBCB' and return an array with number of occurrences", function() {
    var occurrences = getOccurrences('EAAEAACACBDCFDDBABBCB'),
        result = [['E', 2], ['A', 6], ['C', 4], ['B', 5], ['D', 3], ['F', 1]];

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

  it("receive an ordered array of occurrences as '[['F', 1], ['E', 2], ['D', 3], ['C', 4], ['B', 5], ['A', 6]]' and return the combination", function() {
    var occurrences = [['F', 1], ['E', 2], ['D', 3], ['C', 4], ['B', 5], ['A', 6]],
        result = ['FE', 3];
    expect(result).toEqual(combine(occurrences));
  })

  it("receive an array of occurrences with one element as '[['A', 6]]' and return the same element", function() {
    var occurrences = [['A', 6]],
        result = ['A', 6];
    expect(result).toEqual(combine(occurrences));
  })

  it("receive an empty array of occurrences and return an empty array", function() {
    var occurrences = [],
        result = [];
    expect(result).toEqual(combine(occurrences));
  })

  it("receive an ordered array of occurrences where the first two has a same number of occurrences as '[['FE', 3], ['D', 3], ['C', 4], ['B', 5], ['A', 6]]' and return the combination", function() {
    var occurrences = [['FE', 3], ['D', 3], ['C', 4], ['B', 5], ['A', 6]],
        result = ['FED', 6];
    expect(result).toEqual(combine(occurrences));
  })

  it("receive an expression as 'EEAAAAAACCCCFDDDBBBBB' and return the tree", function() {
    var expression = 'EEAAAAAACCCCFDDDBBBBB',
        result = [ 'CBDFEA', 21, [ 'CB', 9, [ 'C', 4 ], [ 'B', 5 ] ], [ 'DFEA', 12, [ 'DFE', 6, [ 'D', 3 ], [ 'FE', 3, [ 'F', 1 ], [ 'E', 2 ] ] ], [ 'A', 6 ] ] ];
    expect(result).toEqual(makeTree(expression));
  })

  it("receive an ordered expression as 'EEAAAAAACCCCFDDDBBBBB' and return the tree", function() {
    var expression = 'AAAAAABBBBBCCCCDDDEEF',
        result = [ 'CBDFEA', 21, [ 'CB', 9, [ 'C', 4 ], [ 'B', 5 ] ], [ 'DFEA', 12, [ 'DFE', 6, [ 'D', 3 ], [ 'FE', 3, [ 'F', 1 ], [ 'E', 2 ] ] ], [ 'A', 6 ] ] ];
    expect(result).toEqual(makeTree(expression));
  })

  it("receive a totally unordered expression as 'EAAEAACACBDCFDDBABBCB' and return the tree", function() {
    var expression = 'EAAEAACACBDCFDDBABBCB',
        result = [ 'CBDFEA', 21, [ 'CB', 9, [ 'C', 4 ], [ 'B', 5 ] ], [ 'DFEA', 12, [ 'DFE', 6, [ 'D', 3 ], [ 'FE', 3, [ 'F', 1 ], [ 'E', 2 ] ] ], [ 'A', 6 ] ] ];
    expect(result).toEqual(makeTree(expression));
  })

  it("receive an empty expression as '' and return the tree", function() {
    var expression = '',
        result = [];
    expect(result).toEqual(makeTree(expression));
  })

  it("receive an expression with one elemenet as 'AAAAAA' and return the tree", function() {
    var expression = 'AAAAAA',
        result = [ 'A', 6 ];
    expect(result).toEqual(makeTree(expression));
  })

  it("receive an expression with two elemenets as 'AAAAAABBBBB' and return the tree", function() {
    var expression = 'AAAAAABBBBB',
        result = [ 'BA', 11, [ 'B', 5] , [ 'A', 6 ]];
    expect(result).toEqual(makeTree(expression));
  })

  it("receive an expression with three elemenets as 'AAAAAABBBBBCCCC' and return the tree", function() {
    var expression = 'AAAAAABBBBBCCCC',
        result = [ 'ACB', 15, [ 'A', 6 ], [ 'CB', 9, [ 'C', 4] , [ 'B', 5 ]]];
    expect(result).toEqual(makeTree(expression));
  })
});