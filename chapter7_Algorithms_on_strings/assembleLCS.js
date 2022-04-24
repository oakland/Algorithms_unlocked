const computeLCSTable = require('./computeLCSTable');

const x = 'CATCGA';
const y = 'GTACCGTCA';
const l = computeLCSTable(x, y);

function assembleLCS(x, y, l, i, j) {
  if(l[i][j] === 0) {
    return '';
  }

  if(x[i-1] === y[j-1]) {
    return assembleLCS(x, y, l, i-1, j-1) + x[i-1];
  } else {
    const upper = l[i-1][j];
    const left = l[i][j-1];
    if(left > upper) {
      return assembleLCS(x, y, l, i, j-1);
    } else {
      return assembleLCS(x, y, l, i-1, j);
    }
  }
}

console.log(assembleLCS(x, y, l, x.length, y.length));
