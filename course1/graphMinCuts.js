const fs = require('fs');
const path = require('path');

const readGraph = (filename) => {
  const file = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
  const rows = file.split(/\r?\n/).filter((line) => !!line);
  const graph = rows.map((node) => node.split(/\t/).filter((edge) => !!edge).map((edge) => Number(edge) - 1));

  return graph;
};

const input = readGraph('kargerMinCut.txt');
console.log(input);

module.exports = { readGraph };
