# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![](images/screenshot-desktop.png)

### Links

- Solution URL: https://github.com/LeviKuhaulua/Front-End-Mentor/tree/main/single-price-grid
- Live Site URL: https://levikuhaulua.github.io/Front-End-Mentor/single-price-grid/single-price-grid.html

## My process

### Built with

- Semantic HTML Elements
- CSS Grid 
- CSS Selectors & Nesting


### What I learned

This helped me get more comfortable with using CSS Grid to achieve layouts that I want. Specifically, this media query helped me so that all the components take up all the available space when we get to smaller screen sizes: 

```css
@media (width < 426px) {
  .wrapper {
    margin-block: 1rem; 
    & > * {
      grid-column: span 2;
    }
  }
}
```

Essentially what this is doing is ensuring that when we get to mobile screen sizes - all the direct children of the grid container will take up both columns (or all the available space). 

### Continued development

Again, I want to get more comfortable with using CSS Grid as I don't have a good grasp of CSS Grid versus Flex. In more challenges, I will attempt with Grid to get more accustomed to it to learn the use cases, implementations, and best practices to write clean and efficient styles with Grid. 

## Author

- Frontend Mentor - [@LeviKuhaulua](https://www.frontendmentor.io/profile/LeviKuhaulua)
- Github - [LeviKuhaulua](https://github.com/LeviKuhaulua)
- LinkedIn - [Levi Kuhaulua](www.linkedin.com/in/levi-kuhaulua)
