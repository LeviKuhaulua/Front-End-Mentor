# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](images/screenshot-desktop.png)

### Links

- Solution URL: https://github.com/LeviKuhaulua/Front-End-Mentor/tree/main/intro-with-signup
- Live Site URL: https://levikuhaulua.github.io/Front-End-Mentor/intro-with-signup.html

## My process

### Built with

- Semantic HTML5 Elements
- HTML
- CSS
- JavaScript
- WAI-ARIA Elements

### What I learned

Here I learned how to better work with `form` elements such as `input` elements for text and email. Something that I'm getting more comfortable with is JavaScript and getting used to handling elements. I like this particular segment that I used to get the siblings of the input fields. 

```js
const inputs = document.querySelectorAll('.signup__form-input')

for (let i = 0; i < inputs.length; i++) {
  let errorMessage = inputs[i].nextElementSibling
  let errorIcon = errorMessage.nextElementSibling
}
```

### Continued development

I want to continue getting better with my naming conventions as I realize I am using the BEM naming convention wrong when it comes to naming my elements. Therefore, for future challenges I want to make sure that the name for my classes follow the BEM conventions. 


### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)

## Author

- Frontend Mentor - [@LeviKuhaulua](https://www.frontendmentor.io/profile/LeviKuhaulua)
- Github - [LeviKuhaulua](https://github.com/LeviKuhaulua)
- LinkedIn - [Levi Kuhaulua](www.linkedin.com/in/levi-kuhaulua)
