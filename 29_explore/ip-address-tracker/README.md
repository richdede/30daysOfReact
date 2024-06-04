<div align="center">
  
[![Twitter Follow](https://img.shields.io/twitter/follow/iamt_toby?style=social)](https://twitter.com/intent/follow?screen_name=iamt_toby)
[![GitHub Follow](https://img.shields.io/github/followers/richdede?label=Follow&style=social)](https://github.com/richdede)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/dee-prince-dede-970913217/)
[![Instagram Follow](https://img.shields.io/badge/Instagram-Follow-ff69b4?style=social&logo=instagram)](https://www.instagram.com/iamt_toby/)

  <br />
  <br />

  <h2 align="center">30 Days Of React: Project </h2>

</div>

### Demo Screeshots

![Site Desktop Demo](./design/desktop-design.jpg "Desktop Demo")

<br />

# Frontend Mentor - IP address tracker solution

![Design preview for the IP address tracker coding challenge](./design/desktop-preview.jpg)

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location


## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [React Leaflet](https://react-leaflet.js.org/)
- [Free IP API](https://freeipapi.com/)

### What I learned

I learnt to work with ```useEffect()``` hook and how to fetch data using it. Object destructuring of ```useState()``` was also used in some places like here :

```js
  const [error, seterror] = useState({ errorMsg: "hide", border: "" });

```

### Continued development

I'll continue working with ```useEffect()``` hook and learn other hooks as well like ```useRef()``` and ```useMemo()``` . . .maybe work with Leaflet as well in the future...I'll try to work on JS Regex as well , since this time as well I copied the regex for valid IP Address from the net as well 😅😅

### Useful resources

- [Free IP API](https://freeipapi.com/) - This helped me as it provided with 60 requests per minute. Other APIs on the other hand provided with 1000 reqs per month . . .which I would have exhausted while building the project, the API data may/may not be a bit compromised  as it is open sourced , but it's fine ig . . .
- [React Leaflet](https://react-leaflet.js.org/) - This is an amazing documentataion which helped me work with leaflet library and implement the map the way I wanted to. I'd recommend it to anyone still learning this concept.
