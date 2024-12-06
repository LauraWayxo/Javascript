# CSS Lesson 06 Lab

In this lab you will be practicing how to use position to position elements on your web page.

## Step 1
- In `style.css` for all the `<header>` elements, make sure these elements are positioned as sticky. After giving the `<header>` element a position of sticky, make sure the element has "top: 0;" applied to it so it will stick to the top of the screen as we scroll in the page.

Example Code:
```css
header {
  /* Add this styling to the existing CSS for this element */
  position: sticky;
  top: 0;
}
```
*Now if you try scrolling through the page, take a look at how the `<header>` element interacts to the page.


## Step 2
- In `style.css`, all the `<nav>` elements need to have a position of fixed, we want to fix these elements to the right side of the screen, make sure to set the width of these elements to 200px, and give a height of 100vh.

Example Code;
```css
nav {
  /* Add this styling to the existing CSS for this element */
  position: fixed;
  width: 200px;
  height: 100vh;
}
```

## Step 3

- In `style.css` give every element that has a class of "box" a position of absolute, we want it to be placed at the top right of its parent container, so give it a top of 5px and right of 10px.

Example Code:
```css
.box {
  /* Add this styling to the existing CSS for this element */
  position: absolute;
  top: 5px;
  right: 10px;
}
```

*After applying this styling to the "box" element, you may notice that the boxes are not being placed as how you'd hope. Finish the next set of instructions to fix this issue.

- All of our "boxes" are stuck at the top right of the page, but to fix that go to `style.css` and give every element that has a class of "filler" a position of relative. 

Example Code
```css
.filler {
   /* Add this styling to the existing CSS for this element */
  position: relative;
}
```