<div align="center">
  
[![Twitter Follow](https://img.shields.io/twitter/follow/iamt_toby?style=social)](https://twitter.com/intent/follow?screen_name=iamt_toby)
[![GitHub Follow](https://img.shields.io/github/followers/richdede?label=Follow&style=social)](https://github.com/richdede)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/dee-prince-dede-970913217/)
[![Instagram Follow](https://img.shields.io/badge/Instagram-Follow-ff69b4?style=social&logo=instagram)](https://www.instagram.com/iamt_toby/)

  <br />
  <br />


# Qr Code Generator with color theme switcher

This app generates Qr Code based on the entered URL. It is also possible to customize and download the generated Qr Code

![Qr Code Generator](./screenshot-dark.png)


## Table of contents

- [About App](#about-app)
- [Process](#process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Getting Started](#getting-started)
  - [System Requirements](#system-requirements)
  - [Installation](#installation)
  - [Bugs](#bugs)

## About App

This app generates Qr Code based on the url entered

![Qr Code Generator](./screenshot-light.png)

Features:
- Light / dark mode theme switcher
- Qr Code 'dee-virid.vercel.app' default on loading
- Dynamically generating the Qr Code as you type the URL
- Dynamically update the color and background of the Qr Code based on the customization input entered by the user
- Dynamically update the customized image of the Qr Code
- Removes the custom image of the Qr Code
- You can download the `.png` of the generated Qr Code

## Process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Grid & Flexbox
- [React](https://reactjs.org/) - Js library
- [QRCode.react](https://www.npmjs.com/package/qrcode.react) - Qr Code package
- [React Color](https://casesandberg.github.io/react-color/) - Color Pickers package

### Continued development

Future features:
- Serverless database connection
- Authentication with login
- Save the Qr Code generated

### Useful resources

- [QRCode.react](https://www.npmjs.com/package/qrcode.react)
- [React Color](https://casesandberg.github.io/react-color/)

## Getting Started

In order to view this project locally, you need to make sure you clone this repository and install it's dependencies.

### System Requirements

- [git][https://git-scm.com/] 2.31.1 or greater
- [node][https://nodejs.org/en/] 14.16.1 or greater
- [npm][https://nodejs.org/en/] 8.7.0 or greater

To check which versions you have installed you can run these commands:
```
git --version
node --version
npm --version
```
If requirements above are not installed in your computer, you'll need to install them. By clicking on them you can go to their website, which can lead you the way.

### Installation

- Clone the repository
  ```sh
  git clone https://github.com/travolgi/react-qrcode-generator.git
  ```
- Navigate to repository folder
  ```sh
  cd react-qrcode-generator
  ```
- Install npm packages
  ```sh
  npm install
  ```
- To run the app in the development mode run in the project directory: 
  ```sh
  npm start
  ```

### Bugs

Please feel free to create an issue if you see a bug or something unexpected in the app.


