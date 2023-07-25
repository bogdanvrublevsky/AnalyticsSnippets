// Add this if you want to use it from sheet's context menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Unmerge All Cells')
      .addItem('Unmerge All Cells', 'unmergeAll')
      .addToUi();
}

// Main unmergeAll function
// Basically unmerges all cells on current sheet
// If is used from apps script 
function unmergeAll(sheet) {
  if (sheet) sheet = SpreadsheetApp.getActiveSheet();
  let range = sheet.getRange(1,1,sheet.getLastRow(),sheet.getLastColumn());
  range = range.getMergedRanges();
  range.forEach((r,i)=>{
    r.breakApart(); 
    r.setValue(range.map(el=>el.getValue())[i]);
  })
}
