// Get reference to the table
const table = document.getElementById('sampleTable');

// Define the function that inserts a new row
function insert_Row() {
    // Create a new row at the top (index 0)
    const newRow = table.insertRow(0); 

    // Create the first cell (New Cell1)
    const cell1 = newRow.insertCell(0);
    cell1.textContent = 'New Cell1';  // Set text content for the first cell

    // Create the second cell (New Cell2)
    const cell2 = newRow.insertCell(1);
    cell2.textContent = 'New Cell2';  // Set text content for the second cell
}

