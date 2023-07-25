// Main unmergeAll function
// Basically unmerges all cells on current sheet or active sheet

function unmergeAll(sheet) {
  if (sheet) sheet = SpreadsheetApp.getActiveSheet();
  let range = sheet.getRange(1,1,sheet.getMaxRows(),sheet.getMaxColumns());
  range = range.getMergedRanges();
  range.forEach((r,i)=>{
    r.breakApart(); 
    r.setValue(range.map(el=>el.getValue())[i]);
  })
}

// Add this if you want to use it from sheet's context menu and

// a) you don't use onOpen() function

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Unmerge All Cells')
      .addItem('Unmerge All Cells', 'unmergeAll')
      .addToUi();
}

// b) you do use onOpen() function (place at the end of your script)

if (onOpen) {
  let old_onOpen = onOpen
  onOpen = function () {
    let ui = SpreadsheetApp.getUi();
    ui.createMenu('Unmerge All Cells')
      .addItem('Unmerge All Cells', 'unmergeAll')
      .addToUi();
    old_onOpen();
  }
}
