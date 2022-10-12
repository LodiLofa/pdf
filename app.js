const PDFDocument = require('pdfkit');
const fs = require('fs');

// create a document and pipe to a blob
var doc = new PDFDocument();

doc.initForm();

doc.formCheckbox('checked', 45,50,16,16, {
    backgroundColor: '#fff'
})


doc.end();
doc.pipe(fs.createWriteStream('./'));