/**
 * Google Docs formatting helpers
 * Apps Script to be used in Google Docs
 * Updated 6/2/2026 
 */

const DEFAULT_LINE_SPACING = 1.5;

/* =========
 * Menu
 * ========= */

function onOpen() {
  const ui = DocumentApp.getUi();

  ui.createMenu('Docs Styles')
    .addSubMenu(
      ui.createMenu('Insert blocks')
        .addItem('Insert Note block', 'insertNoteBlock')
        .addItem('Insert Important block', 'insertImportantBlock')
        .addItem('Insert Warning block', 'insertWarningBlock')
        .addItem('Insert Example block', 'insertExampleBlock')
        .addItem('Insert Result block', 'insertResultBlock')
        .addItem('Insert Caption block', 'insertCaptionBlock')
    )
    .addSubMenu(
      ui.createMenu('Inline styles')
        .addItem('Format as UI element', 'applyUiInlineStyle')
        .addItem('Format as user input', 'applyUserInputInlineStyle')
        .addItem('Format as variable', 'applyVariableInlineStyle')
        .addItem('Clear inline formatting', 'clearInlineFormatting')
    )
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Table styles')
        .addItem('Step/Action table', 'insertStepActionTable')
        .addItem('2-column table', 'insert2ColumnTable')
        .addItem('3-column table', 'insert3ColumnTable')
        .addSeparator()
        .addItem('Auto-number table rows', 'numberTableRows')
        .addItem('Auto-number section steps', 'numberSectionSteps')
    )
    .addToUi();
}

/* =========================
 * Block insertion functions
 * ========================= */

function insertNoteBlock() {
  insertCalloutBlock_({
    label: 'ℹ️ Note:',
    backgroundColor: '#f3f3f3',
    borderColor: '#1155cc',
    fontSize: 10.5
  });
}

function insertImportantBlock() {
  insertCalloutBlock_({
    label: '📌 Important:',
    backgroundColor: '#fff2cc',
    borderColor: '#ff9900',
    fontSize: 10.5
  });
}

function insertWarningBlock() {
  insertCalloutBlock_({
    label: '⚠️ Warning:',
    backgroundColor: '#f4cccc',
    borderColor: '#cc0000',
    fontSize: 10.5
  });
}

function insertExampleBlock() {
  insertCalloutBlock_({
    label: 'Example:',
    backgroundColor: '#efefef',
    borderColor: '#b7b7b7',
    fontSize: 10.5
  });
}

function insertResultBlock() {
  insertLabeledParagraph_({
    label: 'Result:',
    text: 'text',
    fontSize: 11,
    italic: false,
    foregroundColor: '#1f1f1f'
  });
}

function insertCaptionBlock() {
  insertLabeledParagraph_({
    label: '',
    text: 'text',
    fontSize: 10,
    italic: true,
    foregroundColor: '#444444'
  });
}

/**
 * Inserts a 2-column callout block:
 * [colored bar | label + placeholder text]
 */
function insertCalloutBlock_(style) {
  const doc = DocumentApp.getActiveDocument();
  const cursor = doc.getCursor();

  if (!cursor) {
    DocumentApp.getUi().alert('Please place your cursor where you want the callout.');
    return;
  }

  const body = getActiveBody_();
  const index = getInsertionIndex_(body, cursor);

  body.insertParagraph(index + 1, '');
  const table = body.insertTable(index + 2, [['', style.label + ' text']]);
  body.insertParagraph(index + 3, '');

  table.setBorderWidth(0);

  const borderCell = table.getRow(0).getCell(0);
  const contentCell = table.getRow(0).getCell(1);
  const padding = 8;

  borderCell.setWidth(6);
  borderCell.setBackgroundColor(style.borderColor);

  contentCell
    .setBackgroundColor(style.backgroundColor)
    .setPaddingTop(padding)
    .setPaddingBottom(padding)
    .setPaddingLeft(padding)
    .setPaddingRight(padding)
    .setVerticalAlignment(DocumentApp.VerticalAlignment.TOP);

  setCellLineSpacing_(contentCell, 1.5);
  const text = contentCell.editAsText();
  const fullText = text.getText();

  if (fullText.length > 0) {
    applyTextStyleRange_(text, 0, fullText.length - 1, {
      bold: false,
      italic: false,
      foregroundColor: '#1f1f1f',
      fontSize: style.fontSize
    });
  }

  if (style.label && fullText.startsWith(style.label)) {
    text.setBold(0, style.label.length - 1, true);
  }
  placeCursorInCell_(contentCell);
}

/**
 * Inserts a labeled paragraph block.
 */
function insertLabeledParagraph_(style) {
  const doc = DocumentApp.getActiveDocument();
  const cursor = doc.getCursor();

  if (!cursor) {
    DocumentApp.getUi().alert('Please place your cursor where you want the paragraph.');
    return;
  }

  const body = getActiveBody_();
  const index = getInsertionIndex_(body, cursor);

  const paragraphText = style.label
    ? style.label + ' ' + (style.text || '')
    : (style.text || '');

  const paragraph = body.insertParagraph(index + 1, paragraphText);
  paragraph.setHeading(DocumentApp.ParagraphHeading.NORMAL);
  paragraph.setAlignment(DocumentApp.HorizontalAlignment.LEFT);

  const text = paragraph.editAsText();
  const fullText = text.getText();

  if (fullText.length > 0) {
    applyTextStyleRange_(text, 0, fullText.length - 1, {
      bold: false,
      italic: style.italic,
      foregroundColor: style.foregroundColor,
      fontSize: style.fontSize
    });
  }

  if (style.label && fullText.startsWith(style.label)) {
    text.setBold(0, style.label.length - 1, true);
    if (style.italic) {
      text.setItalic(0, style.label.length - 1, true);
    }
  }
}

/* ======================
 * Inline style functions
 * ====================== */

function applyUiInlineStyle() {
  applyInlineStyle_({
    bold: true,
    italic: false,
    backgroundColor: null,
    foregroundColor: '#000000'
  });
}

function applyUserInputInlineStyle() {
  applyInlineStyle_({
    bold: false,
    italic: false,
    backgroundColor: '#e0e0e0',
    foregroundColor: '#000000',
    fontFamily: 'Consolas'
  });
}

function applyVariableInlineStyle() {
  applyInlineStyle_({
    bold: false,
    italic: true,
    backgroundColor: '#eeeeee',
    foregroundColor: '#000000'
  });
}

function clearInlineFormatting() {
  applyInlineStyle_({
    bold: false,
    italic: false,
    backgroundColor: null,
    foregroundColor: '#000000',
    fontFamily: null
  });
}

/**
 * Applies inline formatting to the selected text only.
 */
function applyInlineStyle_(style) {
  const doc = DocumentApp.getActiveDocument();
  const selection = doc.getSelection();

  if (!selection) {
    DocumentApp.getUi().alert('Select text first.');
    return;
  }

  const rangeElements = selection.getRangeElements();
  let changed = false;

  rangeElements.forEach(rangeElement => {
    const element = rangeElement.getElement();

    if (element.getType() !== DocumentApp.ElementType.TEXT) {
      return;
    }

    const text = element.asText();
    let start = rangeElement.getStartOffset();
    let end = rangeElement.getEndOffsetInclusive();

    if (start === -1 || end === -1) {
      start = 0;
      end = text.getText().length - 1;
    }

    if (end < start || text.getText().length === 0) return;

    applyTextStyleRange_(text, start, end, style);
    changed = true;
  });

  if (!changed) {
    DocumentApp.getUi().alert('Select actual text, not just a paragraph boundary or object.');
  }
}

/* ======================
 * Table insertion
 * ====================== */

function insertStepActionTable() {
  const table = insertTableAtCursor_(
    [
      ['Step', 'Action'],
      ['', '']
    ],
    'Please place your cursor where you want the table.'
  );
  if (!table) return;

  const padding = 0.1 * 72;
  const col1Width = 0.6 * 72;

  formatStandardTable_(table);

  for (let i = 0; i < table.getNumRows(); i++) {
    const row = table.getRow(i);
    const cell1 = row.getCell(0);
    const cell2 = row.getCell(1);

    formatCell_(cell1, padding);
    formatCell_(cell2, padding);

    cell1.setWidth(col1Width);
    cell1.setVerticalAlignment(DocumentApp.VerticalAlignment.TOP);
    cell2.setVerticalAlignment(DocumentApp.VerticalAlignment.TOP);

    // ✅ Apply bold to entire Step column (including future text)
    const cell1Text = getCellText_(cell1);
    cell1Text.setBold(true);

    // ✅ Center align Step column (header + rows)
    try {
      cell1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    } catch (e) {}

    if (i === 0) {
      styleHeaderCell_(cell1, true);
      styleHeaderCell_(cell2, false);

      const text2 = getCellText_(cell2);
      if (text2.getText().length > 0) {
        text2.setBold(0, text2.getText().length - 1, true);
      }
    }
  }
  placeCursorInCell_(table.getRow(1).getCell(1));
  const tablePositionIndex = getTablePositionIndex_(table);
  applyDocsApiTableSettings_(tablePositionIndex, 1, true);
}

function insert2ColumnTable() {
  const table = insertTableAtCursor_(
    [
      ['', ''],
      ['', '']
    ],
    'Please place your cursor where you want the table.'
  );
  if (!table) return;

  const padding = 0.1 * 72;
  formatStandardTable_(table);

  for (let i = 0; i < table.getNumRows(); i++) {
    const row = table.getRow(i);
    const cell1 = row.getCell(0);
    const cell2 = row.getCell(1);

    formatCell_(cell1, padding);
    formatCell_(cell2, padding);

    if (i === 0) {
      styleHeaderCell_(cell1, false);
      styleHeaderCell_(cell2, false);
      setWholeCellBold_(cell1, true);
      setWholeCellBold_(cell2, true);
    } else {
      setWholeCellBold_(cell1, true);
    }
  }
  placeCursorInCell_(table.getRow(1).getCell(1));
  const tablePositionIndex = getTablePositionIndex_(table);
  applyDocsApiTableSettings_(tablePositionIndex, 1, true);
}

function insert3ColumnTable() {
  const table = insertTableAtCursor_(
    [
      ['', '', ''],
      ['', '', '']
    ],
    'Please place your cursor where you want the table.'
  );
  if (!table) return;

  const padding = 0.1 * 72;
  formatStandardTable_(table);

  for (let i = 0; i < table.getNumRows(); i++) {
    const row = table.getRow(i);
    const cell1 = row.getCell(0);
    const cell2 = row.getCell(1);
    const cell3 = row.getCell(2);

    formatCell_(cell1, padding);
    formatCell_(cell2, padding);
    formatCell_(cell3, padding);

    if (i === 0) {
      styleHeaderCell_(cell1, false);
      styleHeaderCell_(cell2, false);
      styleHeaderCell_(cell3, false);

      setWholeCellBold_(cell1, true);
      setWholeCellBold_(cell2, true);
      setWholeCellBold_(cell3, true);
    } else {
      setWholeCellBold_(cell1, true);
    }
  }
  placeCursorInCell_(table.getRow(1).getCell(1));
  const tablePositionIndex = getTablePositionIndex_(table);
  applyDocsApiTableSettings_(tablePositionIndex, 1, true);
}

/* =========
 * Utilities
 * ========= */

function getActiveBody_() {
  const doc = DocumentApp.getActiveDocument();
  return doc.getActiveTab().asDocumentTab().getBody();
}

function getInsertionIndex_(body, cursor) {
  let element = cursor.getElement();

  while (
    element &&
    element.getParent() &&
    element.getParent().getType() !== DocumentApp.ElementType.BODY_SECTION
  ) {
    element = element.getParent();
  }

  if (!element) {
    return body.getNumChildren() - 1;
  }

  const index = body.getChildIndex(element);

  if (index === -1) {
    return body.getNumChildren() - 1;
  }

  return index;
}

function insertTableAtCursor_(cells, alertMessage) {
  const doc = DocumentApp.getActiveDocument();
  const cursor = doc.getCursor();

  if (!cursor) {
    DocumentApp.getUi().alert(alertMessage);
    return null;
  }

  const body = getActiveBody_();
  const index = getInsertionIndex_(body, cursor);

  return body.insertTable(index + 1, cells);
}

function formatStandardTable_(table) {
  const tableStyle = {};
  tableStyle[DocumentApp.Attribute.BORDER_WIDTH] = 1;
  tableStyle[DocumentApp.Attribute.BORDER_COLOR] = '#b7b7b7';
  tableStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
  tableStyle[DocumentApp.Attribute.INDENT_START] = 0;
  table.setAttributes(tableStyle);

  const headerStyle = {};
  headerStyle[DocumentApp.Attribute.BOLD] = true;
  headerStyle[DocumentApp.Attribute.VERTICAL_ALIGNMENT] = DocumentApp.VerticalAlignment.TOP;
  table.getRow(0).setAttributes(headerStyle);
}

function placeCursorInCell_(cell) {
  const doc = DocumentApp.getActiveDocument();
  const documentTab = doc.getActiveTab().asDocumentTab();

  const paragraph = cell.getChild(0).asParagraph();
  const text = paragraph.editAsText();

  doc.setCursor(documentTab.newPosition(text, 0));
}

function getTablePositionIndex_(tableElement) {
  const body = getActiveBody_();
  const tableChildIndex = body.getChildIndex(tableElement);

  let tablePositionIndex = -1;

  for (let i = 0; i <= tableChildIndex; i++) {
    if (body.getChild(i).getType() === DocumentApp.ElementType.TABLE) {
      tablePositionIndex++;
    }
  }

  return tablePositionIndex;
}

function applyDocsApiTableSettings_(tablePositionIndex, pinnedRows, preventOverflow) {
  const doc = DocumentApp.getActiveDocument();
  const documentId = doc.getId();

  doc.saveAndClose();

  const document = Docs.Documents.get(documentId);
  const bodyContent = document.body.content;

  let currentTableIndex = -1;
  let targetTable = null;

  for (let i = 0; i < bodyContent.length; i++) {
    const element = bodyContent[i];

    if (element.table) {
      currentTableIndex++;

      if (currentTableIndex === tablePositionIndex) {
        targetTable = element;
        break;
      }
    }
  }

  if (!targetTable) {
    DocumentApp.getUi().alert('The table was inserted, but advanced table settings could not find the target table.');
    return;
  }

  const rowIndices = targetTable.table.tableRows.map((row, index) => index);

  Docs.Documents.batchUpdate({
    requests: [
      {
        pinTableHeaderRows: {
          tableStartLocation: {
            index: targetTable.startIndex
          },
          pinnedHeaderRowsCount: pinnedRows
        }
      },
      {
        updateTableRowStyle: {
          tableStartLocation: {
            index: targetTable.startIndex
          },
          rowIndices: rowIndices,
          tableRowStyle: {
            preventOverflow: preventOverflow
          },
          fields: 'preventOverflow'
        }
      }
    ]
  }, documentId);
}

function formatCell_(cell, padding) {
  cell.setPaddingTop(padding)
    .setPaddingBottom(padding)
    .setPaddingLeft(padding)
    .setPaddingRight(padding)
    .setVerticalAlignment(DocumentApp.VerticalAlignment.TOP);

  setCellLineSpacing_(cell, 1.5);
}

function setCellLineSpacing_(cell, lineSpacing) {
  for (let i = 0; i < cell.getNumChildren(); i++) {
    const child = cell.getChild(i);

    if (child.getType() === DocumentApp.ElementType.PARAGRAPH) {
      child.asParagraph().setLineSpacing(lineSpacing);
    }
  }
}

function styleHeaderCell_(cell, center) {
  cell.setBackgroundColor('#D9D9D9');

  if (center) {
    try {
      const paragraph = cell.getChild(0).asParagraph();
      paragraph.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    } catch (e) {
      // Skip alignment if the cell doesn't expose a paragraph child cleanly.
    }
  }
}

function getCellText_(cell) {
  return cell.editAsText();
}

function setWholeCellBold_(cell, isBold) {
  const text = getCellText_(cell);
  const value = text.getText();
  if (value.length > 0) {
    text.setBold(0, value.length - 1, isBold);
  }
}

function applyTextStyleRange_(text, start, end, style) {
  if (style.bold !== undefined) {
    text.setBold(start, end, style.bold);
  }

  if (style.italic !== undefined) {
    text.setItalic(start, end, style.italic);
  }

  if (style.foregroundColor !== undefined) {
    text.setForegroundColor(start, end, style.foregroundColor);
  }

  if (style.backgroundColor !== undefined) {
    text.setBackgroundColor(start, end, style.backgroundColor);
  }

  if (style.fontSize !== undefined) {
    text.setFontSize(start, end, style.fontSize);
  }

  if (style.fontFamily !== undefined) {
    text.setFontFamily(start, end, style.fontFamily);
  }
}

function numberTableRows() {
  const doc = DocumentApp.getActiveDocument();
  const cursor = doc.getCursor();

  if (!cursor) {
    DocumentApp.getUi().alert('Place your cursor inside the first cell you want to number.');
    return;
  }

  let element = cursor.getElement();

  while (
    element &&
    element.getType() !== DocumentApp.ElementType.TABLE_CELL
  ) {
    element = element.getParent();
  }

  if (!element) {
    DocumentApp.getUi().alert('Place your cursor inside a table cell.');
    return;
  }

  const startCell = element.asTableCell();
  const startRow = startCell.getParent();
  const table = startRow.getParent().asTable();

  const startRowIndex = table.getChildIndex(startRow);
  const cellIndex = startRow.getChildIndex(startCell);

  let currentNumber = 1;

  for (let i = startRowIndex; i < table.getNumRows(); i++) {
    const row = table.getRow(i);

    if (cellIndex >= row.getNumCells()) continue;

    const targetCell = row.getCell(cellIndex);
    targetCell.setText(currentNumber.toString());

    try {
      targetCell.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);
      targetCell.editAsText().setBold(true);
    } catch (e) {}

    currentNumber++;
  }
}

function numberSectionSteps() {
  const ui = DocumentApp.getUi();
  const response = ui.prompt(
    'Section number',
    'Enter the section number, such as 1, 2, or 3.2:',
    ui.ButtonSet.OK_CANCEL
  );

  if (response.getSelectedButton() !== ui.Button.OK) return;

  const sectionNumber = response.getResponseText().trim();

  if (!sectionNumber) {
    ui.alert('Enter a section number.');
    return;
  }

  const doc = DocumentApp.getActiveDocument();
  const cursor = doc.getCursor();

  if (!cursor) {
    ui.alert('Place your cursor inside the first cell you want to number.');
    return;
  }

  let element = cursor.getElement();

  while (
    element &&
    element.getType() !== DocumentApp.ElementType.TABLE_CELL
  ) {
    element = element.getParent();
  }

  if (!element) {
    ui.alert('Place your cursor inside a table cell.');
    return;
  }

  const startCell = element.asTableCell();
  const startRow = startCell.getParent();
  const table = startRow.getParent().asTable();

  const startRowIndex = table.getChildIndex(startRow);
  const cellIndex = startRow.getChildIndex(startCell);

  let currentStep = 1;

  for (let i = startRowIndex; i < table.getNumRows(); i++) {
    const row = table.getRow(i);

    if (cellIndex >= row.getNumCells()) continue;

    const targetCell = row.getCell(cellIndex);
    targetCell.setText(sectionNumber + '.' + currentStep);

    try {
      targetCell.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);
      targetCell.editAsText().setBold(true);
    } catch (e) {}

    currentStep++;
  }
}
