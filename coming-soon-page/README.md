# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](images/screenshot-desktop.png)

### Links

- Solution URL: https://github.com/LeviKuhaulua/Front-End-Mentor/tree/main/coming-soon-page
- Live Site URL: https://levikuhaulua.github.io/Front-End-Mentor/coming-soon-page/coming-soon-page.html

## My process

### Built with

- Semantic HTML Elements
- CSS Flex 
- CSS Selectors
- JavaScript


### What I learned

Initially, I was going to do the error states for the Email Input with JavaScript, however, I realized that I could use CSS to achieve some of the functions in JavaScript - particularly the highlighting of border. See code below: 

```css
form {

  ... styles before 
  &:has(.subscription__button:hover) :is(.subscription__input:invalid, .subscription__input:placeholder-shown){
        border-color: var(--clr-red);        
    }
}
```

Essentially, what this is saying is, when the user hovers over the button in the form, highlight the email input field IF it is either invalid or if no email was entered (`placeholder-shown` attribute). 

Another thing that I particularly liked was using the `flex-grow` and `flex-basis` of flexbox to achieve the following: have it so that at bigger screen sizes, the email field will be larger than the button, and at smaller screen sizes the button will be just as big as the email field. I accomplished this by doing the following: 

```css

form {
  display: inherit;
  flex-wrap: wrap; 

  & > * {
    flex-grow: 1;
  }

  & email__field {
    flex-basis: 40ch; 
  }

  & form__btn {
    flex-basis: 20ch;
  }
}
```
### Continued development

I want to continue getting comfortable with naming conventions and best practices for styling and JavaScript. Another thing too is getting comfortable with using the Browser Debug tool in JavaScript so that I can learn the different attributes associated with elements and also test out parts of my script before I go ahead and implement then trial and error if it doesn't work. 

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) - particularly the JavaScript documentation. 

## Author

- Frontend Mentor - [@LeviKuhaulua](https://www.frontendmentor.io/profile/LeviKuhaulua)
- Github - [LeviKuhaulua](https://github.com/LeviKuhaulua)
- LinkedIn - [Levi Kuhaulua](www.linkedin.com/in/levi-kuhaulua)
