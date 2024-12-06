# HTML Lab Lesson 02

Enhance your understanding of HTML basics by following these structured steps:

## Step 1: Navigation Bar
- Open `index.html`.
- Inside the `<body>`, create a `<nav>` tag.

Code Example: 
```html
<nav>
</nav>
```

- Within `<nav>`, add three `<a>` tags:
  1. **Home**: `<a href="index.html">Home</a>`
  2. **About**: `<a href="about.html">About</a>`
  3. **Npower's Website**: `<a href="https://www.npower.org" target="_blank">Npower's Website</a>`

Code Example:
```html
<nav>
  <a href="source link">Text</a>
</nav>
```

## Step 2: Lists Section
- Below `<nav>`, create a `<section>` with an id of "lists".

Code Example:
```html
<section id="id goes here">
</section>
```

- Inside this section, create a `<ul>` for colors:
  - Add three `<li>` elements, each with a different color.
- Below the `<ul>`, create an `<ol>` for tasks:
  - Add three `<li>` elements with tasks like "walk the dog", "call my internet provider", etc.

Code Example:
```html
<section id="id goes here">
  <ul>
    <li>Text Goes Here</li>
  </ul>
  <ol>
    <li>Text Goes Here</li>
  </ol>
</section>
```

## Step 3: Table Creation
- Below `<section id="lists">`, create a `<table>`.
- Construct a table with 3 columns and 4 rows, including a header row.

Code Example:
```html
<table>
  <tr>
    <th>Header</th>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

## Step 4: Media Section
- Below the `<table>`, create a `<section>` with an id of "media".
- Inside this section:
  - **Audio**: Add an `<audio>` tag with `controls` attribute. Inside, add a `<source>` with `src` pointing to `pixabay_cute_creatures.mp3` in the "assets" folder and `type="audio/mp3"`.
  - **Video**: Add a `<video>` tag with `controls`. Inside, add a `<source>` with `src` pointing to `pixabay_laptop.mp4` in the "assets" folder and `type="video/mp4"`.
  - **Image**: Add an `<img>` tag with `src` pointing to `pixabay_girl.png` in the "assets" folder and an `alt` text of "pixabay girl".
  
Code Example:
```html
<section id="id goes here">
  <audio controls>
    <source src="audio source goes here" type="type goes here">
  </audio>
  <video controls>
    <source src="video source goes here" type="type goes here">
  </video>
  <img src="image source goes here" alt="alternate text">
</section>
```

## Step 5. Embedding an Iframe 
- Below the `<section id="media">` insert this code to embed an `<iframe>` into the website, so all you need to do is just copy and paste this following code under the `<section id="media">`: 
```html
  <iframe width="1280" height="720" src="https://www.youtube.com/embed/i5T6Fnbq34c" title="Aesthetic anime cooking ramen with sound effects" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```