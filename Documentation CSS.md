This is a basic CSS to format documentation.

```css
/*-------------------------------------
  1. General Typography
-------------------------------------*/
body {
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #333;
}

/*-------------------------------------
  2. Headings
-------------------------------------*/
h1 {
    font-size: 22px !important;
    font-weight: bold;
    margin-bottom: 10px;
    color: #222;
}

h2 {
    font-size: 18px !important;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 8px;
    color: #333;
}

h3 {
    font-size: 16px !important;
    font-weight: bold;
    margin-top: 18px;
    margin-bottom: 6px;
    color: #444;
}

/*-------------------------------------
  3. Paragraphs
-------------------------------------*/
p {
    margin-bottom: 12px;
}

/*-------------------------------------
  4. Lists
-------------------------------------*/
ul, ol {
    margin-left: 20px;
    padding-left: 0;
    list-style-position: inside; /* Required by ServiceNow */
}

ul li, ol li {
    margin-bottom: 6px;
    position: relative;
    padding-left: 20px;
    text-indent: -20px; /* Creates hanging indent */
}

ul li::marker,
ol li::marker {
    font-weight: bold;
}

/* Fix line breaks in list items */
ul li br,
ol li br {
    display: block;
    content: "";
    margin-left: 20px;
}

/*-------------------------------------
  5. Tables
-------------------------------------*/
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

th, thead, td {
    border: 1px solid #ddd;
    padding: 8px;
}

th, thead {
    background-color: #f4f4f4;
    font-weight: bold;
}

/*-------------------------------------
  6. Code Blocks
-------------------------------------*/
pre {
    background: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    font-family: monospace;
}

/*-------------------------------------
  7. Links
-------------------------------------*/
a {
    color: #0056b3;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/*-------------------------------------
  8. Callouts (Note, Warning, Example)
-------------------------------------*/
.note,
.warning,
.example-block {
    padding: 1em;
    margin: 1em 0;
    font-family: sans-serif;
    white-space: normal;
    box-sizing: border-box;
}

.note {
    background-color: #f9f9f9;
    border-left: 4px solid #0073e6;
}

.warning {
    background-color: #fff3cd;
    border-left: 4px solid #ff9800;
}

.example-block {
    background-color: #f0f0f0; /* Improved contrast */
    border-left: 4px solid #aaa; /* Clearer framing */
}

/* Adjust spacing/indentation inside lists */
li .note,
li .warning,
li .example-block {
    text-indent: 0;
    padding-left: 1em;
    margin-left: 0;
    display: block;
}

li > .note,
li > .warning,
li > .example-block {
    margin-top: 0.5em;
}

/*-------------------------------------
  9. User Input Formatting
-------------------------------------*/
.user-input {
    font-family: Consolas, monospace;
    background-color: #e0e0e0; /* Enhanced accessibility */
    padding: 2px 4px;
    border-radius: 3px;
    color: #000;
}

.user-input .variable {
    font-style: italic;
    color: #333;
}

/*-------------------------------------
  10. Screenshots
-------------------------------------*/
.screenshot {
    border: 1px solid #000;
    display: block;
    margin: 12px 0;
    max-width: 100%;
    height: auto;
}
```
