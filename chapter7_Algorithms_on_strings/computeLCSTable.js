function computeLCSTable(x = '', y = '') {
  let table = [];
  const lx = x.length;
  const ly = y.length;

  // init first row and first column
  for(let i = 0; i <= lx; i++) {
    table.push([0]);
  }
  for(let i = 0; i <= ly; i++) {
    table[0][i] = 0;
  }

  // start
  for(let i = 1; i <= lx; i++) {
    for(let j = 1; j <= ly; j++) {
      const characterX = x[i-1];
      const characterY = y[j-1];
      if(characterX === characterY) {
        table[i][j] = table[i-1][j-1] + 1;
      } else {
        table[i][j] = Math.max(table[i-1][j], table[i][j-1]);
      }
    }
  }

  return table;
}

console.log(computeLCSTable('CATCGA', 'GTACCGTCA'));
