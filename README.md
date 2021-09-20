![Landing Banner](https://i.imgur.com/SOylf5Y.png)

# Landing Page Project
	
The project provides a multi-section landing page with a dynamically updating navigational menu based on the amount of content that is added to the page.
The page implements some HTML and CSS and mostly focus on JavaScript implementation.

## Demo-Preview
![Page-Demo](https://i.imgur.com/9lpBlDm.png)

## Table of Contents

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Resources](#resources)

## Installation
[(Back to top)](#table-of-contents)

Locate index.html file and run it.

## Development
[(Back to top)](#table-of-contents)

Here is a brief of the implementation of JavaScript code:

Functions:
- There is a createList() function which creates the links of the nav bar for each section dynamically depending on sections count.

- Another function is created to determine which section is active through setActiveFunction(), this function is fired when the page is scrolled
through window.addListener().
setActiveFunction() includes a callback function which is fired whenever a threshold is crossed, callback() includes entries array which holds
information about the active section, next all sections are being checked to remove 'active' class from them and add it to the correct section,
the same is being done to nav-bar links.

Events:
- ul.addEventListener is an event that's used to scroll to the clicked section on the navbar using scrollIntoView().

- window.addEventListener is used to determine which class is active and changes its layout through setActiveSection() function.

## Resources
[(Back to top)](#table-of-contents)

I have used the following links to gain some knowledge about some parts.

-https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons
-https://stackoverflow.com/questions/37081721/use-variables-in-document-queryselector