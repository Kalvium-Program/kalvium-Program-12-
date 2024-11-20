# FEWD Milestone 3 Assessment: Food Preferences Survey Form

## Project Overview
In this milestone assessment, you'll be creating a **Food Preferences Survey Form** using HTML and CSS. This one-hour project is focused on implementing essential form components and applying basic styling to create a user-friendly interface. You'll be provided with the HTML page structure, so your main tasks will be to add specific form elements and apply styles. **Jasmine tests** will verify the successful implementation of each component.

---

## Project Requirements

### 1. Form Components
Ensure your form includes the following components. Each of these will be verified by Jasmine tests.

- **Title and Header:**
  - Add a title using an `<h1>` element with the text **"Food Preferences - Survey Form"**.
  - Include a short instructional subtitle using an `<h5>` element.

- **Name Input:**
  - Add a text input field for the user to enter their name.
  - Use an `<input type="text">` element with the `name` attribute set to `"user"`.

- **Age Input:**
  - Add a number input field for the user's age.
  - Use an `<input type="number">` element with `name="age"`, and set `min="13"` and `max="100"`.

- **Location Radio Buttons:**
  - Add radio buttons for users to select where they usually eat.
  - Use `<input type="radio">` elements with `name="location"`, providing options such as **"At Home"** and **"At Restaurants"**.

- **Vegan Choice:**
  - Add radio buttons asking if the user would consider going vegan, with options **"Sure"** and **"No"**.
  - Use `<input type="radio">` elements with `name="vegan"`.

- **Submit Button:**
  - Add a "Submit" button to submit the form data.
  - Use a `<button>` element with `type="submit"`.

### 2. Styling with CSS
Apply basic CSS styling to improve the form's appearance and usability:

- Set the font family to **sans-serif** for the form.
- Add padding and alignment for a neat and accessible layout.
- Style the submit button with basic spacing for a polished look.

---

## Jasmine Test Requirements

To pass the Jasmine tests, ensure your form includes the following components:

- The form's title must be **"Food Preferences - Survey Form"**.
- A text input for "Name" must exist.
- A number input for "Age" with `min="13"` and `max="100"` must exist.
- Radio buttons for "Where do you eat" must include options: **"At Home"** and **"At Restaurants"**.
- Radio buttons for vegan choice must have **"Sure"** and **"No"** options.
- A submit button must be present.

---


Happy Coding! 😊
