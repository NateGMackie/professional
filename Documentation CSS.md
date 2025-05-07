This is a basic CSS to format documentation.

```css
/*-------------------------------------
  General Typography
-------------------------------------*/
body {
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #333;
}

/*-------------------------------------
  Headings
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
    margin-top: 20px;
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
  Paragraphs
-------------------------------------*/
p {
    margin-bottom: 12px;
}

/*-------------------------------------
  Lists (Ordered & Unordered)
-------------------------------------*/
ul, ol {
    margin-left: 20px;
    padding-left: 0;
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

/* Line breaks in list items */
ul li br,
ol li br {
    display: block;
    content: "";
    margin-left: 20px;
}

/*-------------------------------------
  Tables
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
  Code Blocks
-------------------------------------*/
pre {
    background: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    font-family: monospace;
}

/*-------------------------------------
  Links
-------------------------------------*/
a {
    color: #0056b3;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/*-------------------------------------
  Callouts (Note, Warning, Example)
-------------------------------------*/
.note {
    background: #f9f9f9;
    border-left: 4px solid #0073e6;
    padding: 10px;
    margin: 10px 0;
}

.example-block {
    background-color: #f9f9f9;
    border-left: 4px solid #ccc;
    padding: 1em;
    font-family: sans-serif;
    white-space: normal;
}

.warning {
    background: #fff3cd;
    border-left: 4px solid #ff9800;
    padding: 10px;
    margin: 10px 0;
}

/*-------------------------------------
  User Input Formatting
-------------------------------------*/
.user-input {
    font-family: Consolas, monospace;
    background-color: #f5f5f5;
    padding: 2px 4px;
    border-radius: 3px;
    color: #000;
}

.user-input .variable {
    font-style: italic;
    color: #555;
}
```
