
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Bugs](#Bugs)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- When a number changes, make the card flip from the middle

### Screenshot

![](./design/desktop-design.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- BEM 
- JavaScript 
- ScSS
- Mobile-first workflow

### What I learned

1- Before this challenge the built tool that I used was parcel which is a module bundler with zero confgration but for this projcet I used webpack is the toatal opposite of parcel when is comes to configuation. While you could use default configuration which can save you alot of time I wanted to learn the inner working of webpack and configuring it for this project give a good grasp on basics like loader and entry files. I hade some issue making the HMR(Hot module replacement) work of htm file but it will make a good challenge for the next project.

2- Being stratigiec about the way you import partials or functions in different namespaces can save you alot of typing/time. For instance if you use something like a function that converts pixel value to rem values you can import it once in you main entry file instead of importing is in each partial or having to use a namespace.
```css 
block{
  padding: rem(a value)
}
```

3- Commit history is really valuable asset for debugging purposes and a bunch of other reason therefore creating a logical and descriptive one is important. A bad practice is to 
only use none-specific commit messages like "added some styles". A much better commit message has the following structure:
```
  1-Subject 
  2- Body:
    1- what have you changed or added?
    2- the purpose of change
    3- dangers 
```
###Bugs 
1- When content of a contaienr changes dynamically you have to acount for that when you writing styles for that contaienr. For instance if you set the content of each timer__box to a four or more digit number the content overflow. This problem could be migtigated using relative units like em.




### Continued development

1- Gettig a better understanding of webpack
2- New js features
3- Deepening my knowledge about accessibility,scss,bem and js.
4- Web security.


### Useful resources

- [https://webpack.js.org/guides/development-vagrant/#configuring-the-project](https://webpack.js.org/guides/development-vagrant/#configuring-the-project) - Webpack documentation. 



