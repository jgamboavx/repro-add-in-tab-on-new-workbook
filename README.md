
# Replication steps:

## Setup
`npm install`

`npm run build`

`npm run dev-server`

`npm start`

## In Excel

Open the add-in taskpane

Click on the 'Create Workbook' button. (or call the `=CONTOSO.NEWWORKBOOK()` function)

A new workbook will open.

On the original workbook, the taskpane will go gray.

To prove it's the same instance, click the Increment button to see the counter go up.
Go back to the original workbook, close and re-open the taskpane, and see that the counter matches the value on the original taskpane.
Also, by now, the taskpane on the new workbook shall have gone gray.

## Issue

Calling the following sequentially:

`await Excel.createWorkbook()`

`await Office.addin.showAsTaskpane();`

Results in the taskpane appearing on the new workbook.
