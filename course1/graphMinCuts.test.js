const { readGraph, constraintEdge } = require('./graphMinCuts');
const { readInput } = require('.');

describe('Graph Min Cuts', () => {
  const runTestCase = (testCase) => () => {
    const graph = readGraph(`assignment4MinCut/input_random_${testCase}.txt`, ' ');
    const [result] = readInput(`assignment4MinCut/output_random_${testCase}.txt`);

    console.log(graph);
    console.log(constraintEdge(graph, 2, 1));
  };

  describe('#kargerMinCut', () => {
    it('should return correct min cut for 1_6', runTestCase('1_6'));
  });
});
