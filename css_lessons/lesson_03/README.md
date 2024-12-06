# CSS Lesson 03 Lab

In this lab we will improve on adding colors, background colors, using google fonts, and changing the size of the fonts on our website

## Step 1:
- In `style.css` change the background color of the element that has an id of "main-content", use the hex value of "#fd5c63" to change the background color to Airbnb shade of red.

Example Code:
```css
#main-content {
  /* Add this line to the existing CSS in this element */
  background-color: #fd5c63;
}
```

- In `style.css` change the font color of the `<h1>` element to have a color of "blue".

Example Code:
```css
h1 {
  /* Add this line to the existing CSS in this element */
  color: blue;
}
```

- In `style.css` change the font color of all elements that have a class of "text-yellow" to yellow, but make sure to use the RGB value of yellow. The rgb value of yellow is "rgb(255, 255, 0);"

Example Code:
```css
.text-yellow {
  /* Add this line to the existing CSS in this element */
  color: rgb(255, 255, 0);
}
```

## Step 2:
- In `index.html` import the google font URL for the roboto text, this import must occur in the `<head>` element in this file.

Example Code: 
```html
<head>
  <!-- These three lines of code are used to import Google Fonts in the <head> element to be used in our web page -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</head>
```
- After we have successfully imported Google fonts in our web page, go to `style.css` and change the font family of all the elements that have a class of "text-roboto".

```css
.text-roboto {
  /* Add this line to the existing CSS in this element */
  font-family: "Roboto", sans-serif;
}
```

## Step 3:

- In `style.css` change the font size of all the elements that have a class of "text-lg" to "font-size: 32px;"

Example Code;

```css
.text-lg {
  /* Add this line to the existing CSS in this element */
  font-size: 32px;
}
```