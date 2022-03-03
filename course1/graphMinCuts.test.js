const {
  readGraph, kargerMinCut,
} = require('./graphMinCuts');
const { readInput } = require('.');

describe('Graph Min Cuts', () => {
  const runTestCase = (testCase) => () => {
    const graph = readGraph(`assignment4MinCut/input_random_${testCase}.txt`, ' ');
    const [expectedMinCut] = readInput(`assignment4MinCut/output_random_${testCase}.txt`);

    const minCut = kargerMinCut(graph);

    expect(minCut).toBe(expectedMinCut);
  };

  describe('#kargerMinCut', () => {
    it('should return correct min cut for 3_6', runTestCase('3_6'));
    it('should return correct min cut for 8_10', runTestCase('8_10'));
    it('should return correct min cut for 15_50', runTestCase('15_50'));
    it('should return correct min cut for 19_75', runTestCase('19_75'));
    // it('should return correct min cut for 24_100', runTestCase('24_100'));
    // it('should return correct min cut for 25_125', runTestCase('25_125'));
    // it('should return correct min cut for 31_150', runTestCase('31_150'));
    // it('should return correct min cut for 40_200', runTestCase('40_200'));
  });
});
