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
    // replace merged edge with paralel edge
    graph.set(node, edges.map((edge) => (edge === head ? tail : edge)));
  });

  return graph;
};

const pickRandomEdge = (graph) => {
  const nodes = [...graph.keys()];
  const nodeIndex = Math.floor(Math.random() * (nodes.length - 1));
  const head = nodes[nodeIndex];

  const tails = graph.get(head);
  const tailIndex = Math.floor(Math.random() * (tails.length - 1));
  const tail = tails[tailIndex];

  return [tail, head];
};

/**
 * Find cuts with karger algorithm with 1 iteration
 * @param {Map} graph - input graph
 * @returns {number} remaining graph edges
 */
const findCuts = (graph) => {
  while (graph.size > 2) {
    const [tail, head] = pickRandomEdge(graph);
    constraintEdge(graph, tail, head);
  }

  return graph.values().next().value.length;
};

/**
 * Karger minimum cuts algorithm
 * @param {Map} graph - input graph
 * @returns {Map} merged edges graph
 */
const kargerMinCut = (graph) => {
  const n = graph.size;
  const nChoose2 = (n * (n - 1)) / 2;

  let minCut = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nChoose2; i++) {
    const cut = findCuts(new Map(graph));
    if (cut <= minCut) {
      minCut = cut;
    }
  }

  return minCut;
};

module.exports = {
  readGraph, constraintEdge, pickRandomEdge, findCuts, kargerMinCut,
};

const assignment4 = () => {
  const graph = readGraph('kargerMinCut.txt');
  const result = kargerMinCut(graph);

  console.log('size', graph.size);
  console.log('result', result); // = 17
};

assignment4();
