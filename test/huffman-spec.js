//var huffman = require('../huffman.js');

describe("Huffmann tree", function() {
  it("receive a expression as 'AAAAAABBBBBCCCCDDDEEF' and return an array with number of occurrences when 'A' is 6", function() {
    var occurrences = getOccurrences('AAAAAABBBBBCCCCDDDEEF'),
    	Aoccurences = occurrences[0];

    expect(['A', 6]).toEqual(Aoccurences);
  });
});