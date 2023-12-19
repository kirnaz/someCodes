function multiplicationTable(n) {
    // Create an empty array to hold the rows of the table
    let table = [];
  
    // Loop through each row of the table
    for (let i = 1; i <= n; i++) {
      // Create an empty array to hold the cells of the current row
      let row = [];
  
      // Loop through each cell of the current row
      for (let j = 1; j <= n; j++) {
        // Multiply the current row number by the current column number
        let product = i * j;
        
        // Add the product to the current row
        row.push(product);
      }
  
      // Add the current row to the table
      table.push(row);
    }
  
    return table;
  }

//TypeScript:

// export function multiplicationTable(size: number): number[][] {
    // Initialize an empty matrix of size n x n
//    const table: number[][] = new Array(size).fill(null).map(() => new Array(size).fill(null));

    // Fill in the values of the matrix
//    for (let i = 1; i <= size; i++) {
//      for (let j = 1; j <= size; j++) {
//        table[i - 1][j - 1] = i * j;
//      }
//    }

//    return table;
}
