# HTML Lab Lesson 01

Follow these steps to complete the HTML lab and enhance your understanding of HTML basics:

## Step 1: Start with the HTML Template 
Open `index.html` in your code editor. You can type `!` and hit the enter key to auto-populate an HTML page template, or copy and paste the following code into your file:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>HTML Lesson 01</title>
   </head>
   <body>
   
   </body>
   </html>
   ```

## Step 2: Preview Your Page 
Use the Live Server extension to preview this webpage on your machine. Once you open the page, it will be accessible at http://localhost:5500/. To do this, open your index.html file in Visual Studio Code, then right-click anywhere in the file, and select the "Open with Live Server" option.

## Step 3: Structure Your Page
Inside the `<body>` tag of your page, add a `<header>` element. Below the `<header>`, create a `<main>` element, and finally, add a `<footer>` element below the `<main>`

Code Example:
```html
<body>
  <header></header>
  <main></main>
  <footer></footer>
</body>
```

## Step 4: Add Content Containers
- In the `<header>`, add a `<section>` with an id of "content_section".

Code Example:
```html
<header>
  <section id="id goes here"></section>
</header>
```
- In the `<main>`, add a `<div>` with an id of "hello", another `<div>` with a class of "my_article", and an `<aside>` element.
```html
<main>
  <div id="id goes here"></div>
  <div id="id goes here"></div>
</main>
```


## Step 5: Populate Content
- Inside `<section id="content_section">`, add an `<h1>` with the text "Welcome to My Website".

Code Example:
```html
<section id="id goes here">
  <h1>Text Goes Here</h1>
</section>
```

- In `<div id="hello">`, add an `<h2>` with the text "I am a Greeting!".

Code Example:
```html
<div id="id">
  <h2>Text Goes Here</h2>
</div>
```

- Inside `<div class="my_article">`, add an `<article>` element. Within this `<article>`, create an `<h3>` with the text "Article Title 2".

Code Example:
```html
<div id="id goes here">
  <article>
    <h3>Text Goes Here</h3>
  </article>
</div>
```

## Step 6: Add Paragraphs
- Under the `<h3>` element create a `<p>` element with a text of "I am a paragraph", after creating the `<p>` element add a `<br>` to be able to insert a break. 

Code Example:
```html
<p>Text Goes Here</p>
<br>
```
- Following the `<br>` create another `<p>` element with a text of "I am another paragraph"

## Step 7: Emphasize Text
- Inside of your `<aside>` element create a `<p>`, containing a `<strong>` tage with the text "I am a strong tag."

Code Example:
```html
<aside>
  <p><strong>Text Goes Here</strong></p>
</aside>
```
- Below this, add another `<p>` containig an`<em>` tag with the text "Emphasis text!"

Code Example:
```html
<p><em>Text Goes Here</em></p>
```