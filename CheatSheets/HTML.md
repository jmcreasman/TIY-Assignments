##Entry 1
The structure of a basic HTML tags are keywords (tag names) surrounded by angle brackets: <tagname>content</tagname>. HTML tags normally come in pairs like <p> and </p>. The first tag in a pair is the start tag, the second tag is the end tag. The end tag is written like the start tag, but with a slash before the tag name. If a tag is call an empty tag it means that it has no end tag.
###<!DOCTYPE>
The <!DOCTYPE> declaration helps the browser to display a web page correctly. To display a document correctly, the browser must know both type and version. So for example for html it would look like this; <!DOCTYPE html>.
###<!-- Comments -- >
Writing comments (lines ignored by the computer) are done differently than in CSS and JS. To write a comment you open with <!-- and close with --> Here’s an example; <!-- I am a comment -->
###<html>
The <html> tag tells the browser that this is an HTML document. The <html> tag represents the root of an HTML document. The <html> tag is the container for all other HTML elements (except for the <!DOCTYPE> tag).
###<head>
The head element is a container for all the head elements and that can include a title for the document, scripts, styles, meta information, and more.
The following elements can go inside the <head> element:
<title> (this element is required in an HTML document)
<style>
<base>
<link>
<meta>
<script>
<noscript>
###<body>
The <body> tag defines the document's body. The <body> element contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc.
###<p>
The <p> tag defines a paragraph.
Example:
<p>This is some text in a paragraph.</p>
###<a>
The <a> tag defines a hyperlink, which is used to link from one page to another. The most important attribute of the <a> element (there are several) is the href attribute, which indicates the link's destination. The words between the a tags are the words that appear on the link.
Example:
<a href="http://www.w3schools.com">Visit W3Schools.com!</a>
###<h1>-<h6>
The <h1> to <h6> tags are used to define HTML headings. <h1> defines the most important heading. <h6> defines the least important heading.
Example: 
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>
###<br>
The <br> tag inserts a single line break. The <br> tag is an empty tag which means that it has no end tag.
Example:
This text contains<br>a line break.
###<em>
The <em> tag is a phrase tag. It renders as emphasized text.
Example:
<em>Emphasized text</em>
##Entry 2
###`ul`
The `<ul>` tag defines an unordered (bulleted) list. You can use the `<ul>` tag together with the `<li>` tag to create unordered lists.
Example:
`<ul>
`<li>Captain America</li>`
`<li>Iron Man</li>`
`<li>Thor</li>`
`</ul>`
###`ol`
The `<ol>` tag defines an ordered list. An ordered list can be numerical or alphabetical. Use the `<li>` tag to define list items.
Example:
`<ol>`
`<li>Coffee</li>`
`<li>Tea</li>`
`<li>Milk</li>`
`</ol>`
###`dl`
The <dl> tag defines a description list. The `<dl>` tag is used in conjunction with `<dt>` (defines terms/names) and `<dd>` (describes each term/name).
Example:
`<dl>`
`<dt>Coffee</dt>`
`<dd>Black hot drink</dd>`
`<dt>Milk</dt>`
`<dd>White cold drink</dd>`
`</dl>`
##Entry 3
###`<form>`
HTML forms are used to collect user input. The <form> element defines an HTML form. HTML forms contain form elements. Form elements are different types of input elements, checkboxes, radio buttons, submit buttons, and more.
Example: 
<form>
. form elements .
</form>
###`<input>`
The <input> element is the most important form element. The <input> element has many variations, depending on the type attribute.
text: Defines normal text input
radio: Defines radio button input (for selecting one of many choices)
submit: Defines a submit button (for submitting the form)
###`<label>`
The <label> tag defines a label for an <input> element. The <label> element does not render as anything special for the user. However, it provides a usability improvement for mouse users, because if the user clicks on the text within the <label> element, it toggles the control. The for attribute of the <label> tag should be equal to the id attribute of the related element to bind them together.
Example:
<form action="demo_form.asp">
<label for="male">Male</label>
<input type="radio" name="sex" id="male" value="male"><br>
<label for="female">Female</label>
<input type="radio" name="sex" id="female" value="female"><br>
<input type="submit" value="Submit">
</form>
###`<fieldgroup>`
The <fieldgroup> tag is used to group related elements in a form. The <fieldgroup> tag draws a box around the related elements.
###`<legend>`
The <legend> tag defines a caption for the <fieldset> element.
##Entry 4
