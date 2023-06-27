/* global Excel, Office */

/**
 * Creates a new workbook
 * @customfunction
 */
export async function newWorkbook() {
  await Excel.createWorkbook();

  await Office.addin.showAsTaskpane();
}
