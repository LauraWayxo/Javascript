# HTML Lab Lesson 03

## Step 1: Creating a Form
- Inside the `<body>` tag, add a `<form>` tag.

Example Code:
```html
<form>
</form>
```

- Within this form, insert a `<fieldset>` tag.
- Inside the `<fieldset>`, add a `<legend>` tag with the text "I am a legend!".

Example Code:
```html
<fieldset>
  <legend>Text Goes Here</legend>
</fieldset>
```

- Below the legend, create three `<label>` tags. In each label, include an `<input>` tag of type "checkbox" with a name of "preference". Choose values like "music", "movies", "books", and add a descriptive text next to each input.

Example Code:
```html
<label for="for attribute needs to be the same as the input id">
  <input type="checkbox" name="name" value="value" id="id goes here">
  Value
</label>
```
- Place a `<br>` tag after each label for spacing.

## Step 2: Adding Radio Buttons
- Still within the `<fieldset>`, add three `<label>` tags.
- In these labels, insert an `<input>` tag of type "radio" with a name of "color". Assign a value (e.g., "Red", "Blue", "Yellow") and add descriptive text after each input.

Example Code:
```html
  <label for="for attribute needs to be the same as the input id">
    <input type="radio" name="name" value="value" id="id goes here">Value
  </label>
```

## Step 3: Text Input Field
- Add a `<label>` tag and within it, an `<input>` tag of type "text". Set its placeholder to "Message..." and name it "message".

Example Code:
```html
<label for="for attribute needs to be the same as input id">
  <input type="text" placeholder="placeholder goes here" name="name goes here" id="id goes here">
</label>
```

## Step 4: Dropdown Selection
- Insert a new `<label>` tag and within this label, add a `<select>` tag named "cars".
- Inside the `<select>`, create four `<option>` tags. Each option should have a value corresponding to a car type, and the displayed text should match that car.

Example Code:
```html
  <label for="for attribute needs to be the same as the select id">
    <select name="name" id="id goes here">
      <option value="value">Value</option>
    </select>
  </label>
```


## Step 5: Form Submission Buttons
- Add a `<button>` tag with a type of "submit" and text "Submit Form".
- Add another `<button>` tag with a type of "reset" and text "Reset Form".

Example Code:
```html
<button type="type goes here">
  Text Goes Here
</button>
```