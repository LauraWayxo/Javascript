# CSS Lesson 07 Lab

In this lab you will be using flex box, follow the steps to complete the lab.

## Step 1
- Inside `style.css` every element that has a class of "flex-row" should display its content in a row.

Example Code:
```css
.flex-row {
  display: flex;
  flex-direction: row;
}
```

## Step 2
- Inside `style.css` every element that has a class of "space-even" should display its content in a column, and its content should be evenly spaced.

Example Code:
```css
.space-even {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
```

## Step 3
- Inside `style.css` every element that has a class of "top-right" needs to have all its content packed at the top right of its "box area"

Example Code:
```css
.top-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
```

## Step 4
- Inside `style.css` every element that has a class of "center" should center its content in the middle of its "box area"

Example Code:
```css
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
```

## Step 5
- Inside `style.css` every element that has a class of "grid" container needs to be displayed as a grid, needs to have 3 columns that are spaced evenly, and has a grid gap of 10px.

Example Code:
```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
```

- Inside `style.css` every element that has a class of "grid-item" needs to have a background color of blue, needs to be 50px in height, has a color of white, and the text is centered.

Example Code:
```css
.grid-item {
  background-color: blue;
  height: 50px;
  color: white;
  text-align: center;
}
```