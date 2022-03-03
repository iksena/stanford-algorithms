const fs = require('fs');
const path = require('path');

const readGraph = (filename, edgesSeparator = /\t/) => {
  const file = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
  const rows = file.split(/\r?\n/).filter((line) => !!line);
  const graph = rows.reduce((graphMap, vertex) => {
    const [tail, ...heads] = vertex.split(edgesSeparator);
    const edges = heads.filter((head) => !!head).map((head) => (Number(head)));

    return graphMap.set(Number(tail), edges);
  }, new Map());

  return graph;
};

/**
 * Merge edges in head into tail to be new supernode
 * @param {Map} graph - graph object with nodes as keys
 * @param {number} tail - tail node to be supernode
 * @param {number} head - head node to be merged with supernode
 * @returns {object} modified graph
 */
const constraintEdge = (graph, tail, head) => {
  graph.set(
    tail,
    [...graph.get(tail), ...graph.get(head)] // merge edges
      .filter((edge) => ![head, tail].includes(edge)), // remove self-loops
  );
  graph.delete(head);
  graph.forEach((edges, node) => {
    graph.set(node, edges.map((edge) => (edge === head ? tail : edge)));
  });

  return graph;
};

const kargerMinCut = (graph) => {

};

// console.log(readGraph('kargerMinCut.txt'));

module.exports = { readGraph, constraintEdge };
