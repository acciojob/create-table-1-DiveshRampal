function insert_Row() {
    //Write your code here
 // Get the table element by ID
    const table = document.getElementById("sampleTable");

    // Create a new row (<tr>) element
    const newRow = document.createElement("tr");

    // Create the left cell (<td>) with text "New Cell1"
    const newCell1 = document.createElement("td");
    newCell1.textContent = "New Cell1";

    // Create the right cell (<td>) with text "New Cell2"
    const newCell2 = document.createElement("td");
    newCell2.textContent = "New Cell2";

    // Append the cells to the new row
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);

    // Insert the new row at the top of the table
    table.insertBefore(newRow, table.firstChild);
}
