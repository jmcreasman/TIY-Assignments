##CSS properties Entry 1
###display property
`display` is CSS's most important property for controlling layout. Every element has a default display value depending on what type of element it is. The default for most elements is usually `block` or `inline`. A block element is often called a block-level element. An inline element is always just called an inline element.
###block
`div` is the standard block-level element. A block-level element starts on a new line and stretches out to the left and right as far as it can. Other common block-level elements are `p` and `form`, and new in HTML5 are `header`, `footer`, `section`, and more.
###inline
`span` is the standard inline element. An inline element can wrap some text inside a paragraph <span> like this </span> without disrupting the flow of that paragraph. The a element is the most common inline element, since you use them for links.
###none
Another common display value is `none`. Some specialized elements such as script use this as their default. It is commonly used with JavaScript to hide and show elements without really deleting and recreating them. This is different from `visibility`. Setting `display` to `none` will render the page as though the element does not exist. `visibility`: `hidden`; will hide the element, but the element will still take up the space it would if it was fully visible.
###list-item
The element generates a block box for the content and a separate list-item inline box.
###Static
`static` is the default value. An element with position: static; is not positioned in any special way. A static element is said to be not positioned and an element with its position set to anything else is said to be positioned.
###relative
relative behaves the same as static unless you add some extra properties.
###fixed
A fixed element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. As with relative, the top, right, bottom, and left properties are used.
###absolute
absolute is the trickiest position value. absolute behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport. If an absolutely-positioned element has no positioned ancestors, it uses the document body, and still moves along with page scrolling.
###float
Another CSS property used for layout is float. Float is intended for wrapping text around images, like this:
`img {`
  `float: right;`
  `margin: 0 0 1em 1em;`
`}`
###percent width
Percent is a measurement unit relative to the containing block. It's great for images: here we make an image that is always 50% the width of its container.
`article img {`
  `float: right;`
  `width: 50%;`
##CSS Box Model properties Entry 2
###margin
The margin CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties: margin-top, margin-right, margin-bottom and margin-left.
###padding
The padding property sets the padding space on all sides of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed.
###border
The border CSS property is a shorthand property for setting the individual border property values in a single place in the style sheet. border can be used to set the values for one or more of: border-width, border-style, border-color.
###max
The max-width property is used to set the maximum width of a given element. It prevents the used value of the width property from becoming larger than the value specified for max-width.
###min
The min-width property is used to set the minimum width of a given element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.
###box-sizing
The box-sizing property is used to alter the default CSS box model used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.
##CSS properties Entry 3
###font
The font CSS property is a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family.
###text
CSS Text is a module of CSS that defines how to perform text manipulation, like line breaking, justification and alignment, white space handling, and text transformation.
###line-height
On block level elements, the line-height property specifies the minimum height of line boxes within the element.
###line-break
The line-break CSS property is used to specify how (or if) to break lines.
###::first-line (:first-line)
The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element.
###color
color is a CSS media feature whose value is the <integer> number of bits per color component of the output device, or zero if the device isn't color.
###background
The background CSS property is a shorthand for setting the individual background values in a single place in the style sheet.
###background-color
The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent.
###background-image
The CSS background-image property sets one or several background images for an element. The images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user.
###font-weight
The font-weight CSS property specifies the weight or boldness of the font. Some fonts are only available in normal and bold.
