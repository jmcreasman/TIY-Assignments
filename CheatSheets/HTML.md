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

